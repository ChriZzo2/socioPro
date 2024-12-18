import { createMainKeyboard } from '../keyboards/mainKeyboard.js';

export function handleStart(bot, msg) {
  const chatId = msg.chat.id;
  const username = msg.from.first_name;
  
  const welcomeMessage = `
Здравствуйте, ${username}! 👋

Я бот-помощник соционического типировщика. Здесь вы можете:
• Узнать больше обо мне и моём опыте
• Прочитать мои статьи о соционике
• Связаться со мной для консультации

Выберите интересующий вас раздел в меню ниже 👇
  `;
  
  bot.sendMessage(chatId, welcomeMessage, createMainKeyboard());
}