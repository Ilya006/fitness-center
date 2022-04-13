<template>
  <form class="form" @submit.prevent="submitHandler">

    <h2>Войти</h2>

    <div class="input">
      <label for="email">Почта</label>
      <input v-model="email" id="email" type="text" placeholder="Почта" />
    </div>

    <div class="input">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" placeholder="Пароль" />
    </div>

    <button type="submit">Войти</button>

    <p>
      Нет аккаута?
      <router-link to="/register">ЗАРЕГИСТРИРОВАТЬСЯ!</router-link>
    </p>

  </form>
</template>


<script>
import { storeToRefs } from "pinia"
import { useLoginStore } from '@/stores/login'

export default {
  name: 'login',


  setup() {
   // Достаем метод для логина
    const { loginUser } = useLoginStore()
    // Добавляем переменные из стейта для использования
    const { user } = storeToRefs(useLoginStore())

    return { loginUser, user }
  },


  data: () =>({
    email: '',
    password: ''
  }),


  methods: {
    async submitHandler() {
      try {
        await this.loginUser(this.email, this.password)
        // Редикерт после авторизации без ошибок на главную страницу "/"
        this.$router.push('/')
      } catch (error) {
        console.log('сломалось при входе')
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
</style>