<template>
  <form class="form" @submit.prevent="submitHandler">

    <h2>Войти</h2>

    <div class="input">
      <label for="email">Почта</label>
      <input v-model.trim="email" id="email" type="text" placeholder="Почта" />
    </div>

    <div class="input">
      <label for="password">Пароль</label>
      <input v-model.trim="password" id="password" type="password" placeholder="Пароль" />
    </div>

    <button type="submit">Войти</button>

    <div class="error">{{error}}</div>

    <p>
      Нет аккаута?
      <router-link to="/register">ЗАРЕГИСТРИРОВАТЬСЯ!</router-link>
    </p>

  </form>
</template>




<script>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import codeError from '@/utils/messages'

export default {
  name: 'login',

  setup() {
    const { login } = useAuthStore() // Достаем метод для логина
    // const { user } = storeToRefs(useAuthStore()) // Добавляем переменные из стейта для использования

    return { login }
  },

  data: () =>({
    email: '',
    password: '',
    error: null
  }),


  methods: {
    async submitHandler() {
      try {
        await this.login(this.email, this.password)
        // Редикерт после авторизации без ошибок на главную страницу "/"
        this.$router.push('/')

        this.error = null // чистим ошибки если есть
      } catch (error) {
        console.log(error.code)
        this.error = codeError[error.code] || 'Что-то пошло не так' // добавляем ошибку из файла messages.js
      }
    }
  }
}
</script>




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
    width: 200px;
  }

  input {
    padding: 5px 10px;
  }

  .active {
    background-color: inherit;
  }

  .error {
    color: tomato;
    padding: 10px;
  }
</style>