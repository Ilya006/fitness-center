// В этом файле храняться сообщения, которые будут отображаться в случае ошибки. Ключ приходит от Firebase


const codeError = {
  'auth/invalid-email': 'Неверный Email',
  'auth/wrong-password': 'Неверный пароль',
  'auth/user-not-found': 'Пользователь не найден',
  'auth/internal-error': 'Некорректные данные',
  'auth/weak-password': 'Пароль должен быть больше 6 символов',
  'auth/email-already-in-use': 'Такой Email уже зарегистрирован'
}

export default codeError