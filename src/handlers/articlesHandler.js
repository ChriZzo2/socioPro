export function handleArticles(bot, chatId) {
  const articles = `
📚 Мои статьи по соционике:

1. "СТАТИСТИКА ТИПИРОВАНИЙ: ПОЛОВОЗРАСТНЫЕ, ГЕОГРАФИЧЕСКИЕ И ПРОЧИЕ СВЯЗИ" 
   [https://xn--b1abqakqebbpnu8b.xn--p1ai/%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0-%D1%81%D0%BE%D1%86%D0%B8%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%B2/]

2. "О НАЗВАНИЯХ СОЦИОНИЧЕСКИХ МАЛЫХ ГРУПП — «ГРУПП ВОСПРИЯТИЯ»" 
   [https://xn--b1abqakqebbpnu8b.xn--p1ai/%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%8B-%D0%B2%D0%BE%D1%81%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F/]

3. "АССОЦИАТИВНЫЙ МЕТОД ТИПИРОВАНИЯ" 
   [https://xn--b1abqakqebbpnu8b.xn--p1ai/%D0%B0%D1%81%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-%D1%82%D0%B8%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/]

4. "СОЦИОНИЧЕСКИЙ ПОДХОД В БИЗНЕСЕ" 
   [https://xn--b1abqakqebbpnu8b.xn--p1ai/%D1%81%D0%BE%D1%86%D0%B8%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B2-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B5/]


Выберите интересующую статью, перейдя по ссылке.
  `;
  
  bot.sendMessage(chatId, articles);
}