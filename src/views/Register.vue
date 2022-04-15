<template>
  <form class="form" @submit.prevent="submitHandler">

    <h2>Зарегистрироваться</h2>

    <div class="input">
      <label for="name">Имя</label>
      <input v-model.trim="name" id="text" type="text" placeholder="Имя" />
    </div>

    <div class="input">
      <label for="email">Почта</label>
      <input v-model.trim="email" id="email" type="text" placeholder="Почта" />
    </div>

    <div class="input">
      <label for="password">Пароль</label>
      <input v-model.trim="password" id="password" type="password" placeholder="Пароль" />
    </div>

    <button type="submit">Регистрация</button>

    <div class="error">{{error}}</div>

    <p>
      У вас уже есть аккаунт?
      <router-link to="/login" >ВОЙТИ!</router-link>
    </p>

  </form>
</template>


<script>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import codeError from '@/utils/messages';

export default {
  name: 'register',


  setup() {
    // Достаем метод для регистрации
    const { register } = useAuthStore()
    // Добавляем переменные из стейта для использования
    // const { user } = storeToRefs(useAuthStore())
    return { register }
  },


  data: () =>({
    email: '',
    password: '',
    name: '',
    error: null
  }),

  computed: {
    formValidation (state) {   // Для валидации формы
      return state.email.length >= 3 && state.password.length >= 3 && state.name.length >= 3
    }
  },


  methods: {
    async submitHandler() {
      // Проверяем что поля больше 3 символов

      if(!this.formValidation) {
        this.error = 'Длина полей должна быть больше 3 символов'
        return  // делаем return чтобы дальнейший код остановился
      }

      try {
        await this.register(this.email, this.password, this.name)

        this.error = null // Чистим все ошибки если все впорядке
        this.$router.push('/') //Редирект на главную страницу
      } catch (error) {
        console.log(error.code)
        this.error = codeError[error.code] || 'Что-то пошло не так'  // добавляем ошибку из файла messages.js
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

  .error {
    color: tomato;
    padding: 10px;
  }
</style>