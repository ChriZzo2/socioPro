export function handleArticles(bot, chatId) {
  const articles = `
📚 Мои статьи по соционике:

1. "Введение в соционику" 
   [ссылка на статью]

2. "Как определить свой тип" 
   [ссылка на статью]

3. "Интертипные отношения" 
   [ссылка на статью]

4. "Признаки Рейнина" 
   [ссылка на статью]

[Добавьте другие ваши статьи]

Выберите интересующую статью, перейдя по ссылке.
  `;
  
  bot.sendMessage(chatId, articles);
}