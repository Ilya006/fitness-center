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

    <p></p>

  </form>
</template>


<script>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';

export default {
  name: 'login',

  setup() {
    const { login } = useAuthStore()

    return { login }
  },

  data: () =>({
    email: '',
    password: ''
  }),

  methods: {
    submitHandler() {
      
      const formData = {
        email: this.email,
        password: this.password
      }

      this.login(this.email, this.password)

      // this.$router.push('/')
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