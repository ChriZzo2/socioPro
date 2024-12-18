export function createMainKeyboard() {
  return {
    reply_markup: {
      keyboard: [
        ['ℹ️ Обо мне', '📚 Статьи'],
        ['📞 Связаться']
      ],
      resize_keyboard: true
    }
  };
}