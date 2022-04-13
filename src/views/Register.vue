<template>
  <form class="form" @submit.prevent="submitHandler">

    <h2>Зарегистрироваться</h2>

    <!-- <div class="input">
      <label for="name">Имя</label>
      <input v-model="email" id="text" type="text" placeholder="Имя" />
    </div> -->

    <div class="input">
      <label for="email">Почта</label>
      <input v-model="email" id="email" type="text" placeholder="Почта" />
    </div>

    <div class="input">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" placeholder="Пароль" />
    </div>

    <button type="submit">Регистрация</button>

    <p>
      У вас уже есть аккаунт?
      <router-link to="/login" >ВОЙТИ!</router-link>
    </p>

  </form>
</template>


<script>
import { storeToRefs } from 'pinia';
import { useRegisterStore } from '@/stores/register';

export default {
  name: 'register',


  setup() {
    // Достаем метод для регистрации
    const { registerUser } = useRegisterStore()
    // Добавляем переменные из стейта для использования
    const { user } = storeToRefs(useRegisterStore())
    return { registerUser, user }
  },


  data: () =>({
    email: '',
    password: '',
  }),


  methods: {
    async submitHandler() {
      try {
        await this.registerUser(this.email, this.password)
      } catch (error) {
        console.log('сломалось при рег')
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
  }

  .active {
    background-color: inherit;
  }
</style>