import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { handleStart } from './handlers/startHandler.js';
import { handleAbout } from './handlers/aboutHandler.js';
import { handleArticles } from './handlers/articlesHandler.js';
import { handleContact } from './handlers/contactHandler.js';
import logger from './utils/logger.js';

dotenv.config();

const token = process.env.BOT_TOKEN;

// Добавляем настройки для предотвращения конфликтов
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});

// Добавляем флаг для отслеживания состояния бота
let isShuttingDown = false;

// Обработка ошибок
bot.on('polling_error', (error) => {
  // Игнорируем ошибки при выключении
  if (isShuttingDown) return;

  logger.error('Polling error:', error);

  // Перезапускаем поллинг при ошибке
  if (error.code === 'ETELEGRAM' && error.response.statusCode === 409) {
    logger.info('Restarting polling due to conflict...');
    bot.stopPolling()
        .then(() => bot.startPolling())
        .catch(err => logger.error('Error restarting polling:', err));
  }
});

// Graceful shutdown
function shutdown() {
  isShuttingDown = true;
  logger.info('Shutting down bot...');

  // Останавливаем поллинг
  bot.stopPolling()
      .then(() => {
        logger.info('Bot stopped successfully');
        process.exit(0);
      })
      .catch(error => {
        logger.error('Error stopping bot:', error);
        process.exit(1);
      });

  // Если бот не остановился через 5 секунд, принудительно завершаем процесс
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 5000);
}

// Обработка сигналов завершения
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Обработка необработанных ошибок
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  shutdown();
});

process.on('unhandledRejection', (error) => {
  logger.error('Unhandled Rejection:', error);
  shutdown();
});

// Логирование запуска бота
logger.info('Bot started successfully');

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  try {
    handleStart(bot, msg);
    logger.info(`Start command from user ${msg.from.id}`);
  } catch (error) {
    logger.error('Error in start handler:', error);
    bot.sendMessage(msg.chat.id, 'Произошла ошибка. Пожалуйста, попробуйте позже.');
  }
});

// Обработка кнопок главного меню
bot.on('message', (msg) => {
  try {
    const chatId = msg.chat.id;

    switch (msg.text) {
      case 'ℹ️ Обо мне':
        handleAbout(bot, chatId);
        logger.info(`About section requested by user ${msg.from.id}`);
        break;
      case '📚 Статьи':
        handleArticles(bot, chatId);
        logger.info(`Articles section requested by user ${msg.from.id}`);
        break;
      case '📞 Связаться':
        handleContact(bot, chatId);
        logger.info(`Contact section requested by user ${msg.from.id}`);
        break;
    }
  } catch (error) {
    logger.error('Error in message handler:', error);
    bot.sendMessage(msg.chat.id, 'Произошла ошибка. Пожалуйста, попробуйте позже.');
  }
});