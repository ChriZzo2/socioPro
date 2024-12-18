export function handleContact(bot, chatId) {
  const contactInfo = `
📞 Как со мной связаться:

📱 Telegram: @Gurov_S
🌐 Сайт: [https://xn--b1abqakqebbpnu8b.xn--p1ai/]

💬 Доступные форматы работы:
• Личная консультация
• Онлайн типирование
• Групповые занятия

📅 Время работы:
ПН-ПТ: 10:00 - 19:00
СБ: 12:00 - 18:00
ВС: выходной

Для записи напишите мне в личные сообщения 👆
  `;
  
  bot.sendMessage(chatId, contactInfo);
}