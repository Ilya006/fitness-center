<template>
  <div class="form">
    <h1>Регистрация</h1>
    <form @submit.prevent="onSubmitLogin" class="form__auth">
      <div class="input-form">
        <input type="text" placeholder="Имя" v-model="name" />
      </div>

      <div class="input-form">
        <input type="text" placeholder="Почта" v-model="email" />
      </div>

      <div class="input-form">
			  <input type="password" placeholder="Пароль" v-model="password" />
		  </div>

      <div class="input-form">
			  <button 
          type="submit" 
          :class="loading ? 'disabled' : ''"
          class="waves-effect waves-light btn"
        >
          Регистрация
        </button>
		  </div>

      <strong class="error_auth">{{messageError}}</strong>

      <router-link to="login" class="forget">Войти</router-link >
    </form>
  </div>
</template>



<script>
import errorsCode from './../utils/errorsCode'

export default {
  name: 'loginPage',

  data: () => ({
    name: '',
    email: '',
    password: ''
  }),

  computed: {
    // Сообщение ошибки
    messageError() {
      const errorCode = this.$store.getters.getErrorAuth
      return errorCode ? errorsCode[errorCode] || 'Что-то пошло не так' : ''
    },
    loading() {
      return this.$store.getters.getLoading
    },
  },

  methods: {
    onSubmitLogin() {
      this.$store.dispatch('clearError')
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  },

  unmounted() {
    this.$store.dispatch('clearError')
  }
}
</script>