<template>
  <form class="form">

    <h2>Зарегистрироваться</h2>

    <div class="input">
      <label for="name">Имя</label>
      <input id="text" type="text" placeholder="Имя" />
    </div>

    <div class="input">
      <label for="email">Почта</label>
      <input id="email" type="text" placeholder="Почта" />
    </div>

    <div class="input">
      <label for="password">Пароль</label>
      <input id="password" type="password" placeholder="Пароль" />
    </div>

    <button type="submit">Регистрация</button>

    <p>
      У вас уже есть аккаунт?
      <router-link to="/login" >ВОЙТИ!</router-link>
    </p>

  </form>
</template>


<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .active {
    background-color: inherit;
  }
</style>