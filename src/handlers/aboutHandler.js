export function handleAbout(bot, chatId) {
  const aboutText = `
🎓 О типировщике:

Меня зовут Сергей Гуров, я профессиональный соционический типировщик с 9 летним опытом.

📊 Мой опыт:
• Протипировал более 4000 человек
• Провел 150 групповых семинаров
• Автор 120 статей по соционике

🎯 Специализация:
• Индивидуальное типирование
• Консультации по межтипным отношениям
• Помощь в самопознании через призму соционики
  `;
  
  bot.sendMessage(chatId, aboutText);
}