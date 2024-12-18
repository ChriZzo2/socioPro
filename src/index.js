import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { handleStart } from './handlers/startHandler.js';
import { handleAbout } from './handlers/aboutHandler.js';
import { handleArticles } from './handlers/articlesHandler.js';
import { handleContact } from './handlers/contactHandler.js';
import logger from './utils/logger.js';

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Обработка ошибок
bot.on('polling_error', (error) => {
  logger.error('Polling error:', error);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (error) => {
  logger.error('Unhandled Rejection:', error);
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