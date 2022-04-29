<template>
  <div class="form">
    <h1>Вход</h1>
    <form @submit.prevent="onSubmitLogin" class="form__auth">
      <div class="input-form">
        <input type="text" placeholder="Почта" v-model="email" />
      </div>

      <div class="input-form">
			  <input type="password" placeholder="Пароль" v-model="password" />
		  </div>

      <div class="input-form">
			  <button 
          type="submit" 
          class="waves-effect waves-light btn " 
          :class="loading ? 'disabled' : ''"
        >
          Войти
        </button>
		  </div>

      <strong class="error_auth">{{messageError}}</strong>

      <router-link to="register" class="forget" >Регистрация</router-link >
    </form>
  </div>
</template>



<script>
import errorsCode from './../utils/errorsCode'

export default {
  name: 'loginPage',

  data:() => ({
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
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },

  mounted() {
    console.log(this.loading)
  },

  unmounted() {
    this.$store.dispatch('clearError')
  },

  watch: {
    loading() {
      console.log(this.loading)
    }
  }
}
</script>