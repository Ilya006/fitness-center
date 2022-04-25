<template>
  <div class="form">
    <h1>Вход</h1>
    <form @submit.prevent="onSubmitLogin">
      <div class="input-form">
        <input type="text" placeholder="Почта" v-model="email" />
      </div>

      <div class="input-form">
			  <input type="password" placeholder="Пароль" v-model="password" />
		  </div>

      <div class="input-form">
			  <button type="submit" class="waves-effect waves-light btn">Войти</button>
		  </div>

      <router-link to="register" class="forget">Регистрация</router-link >
    </form>
  </div>
</template>



<script>
export default {
  name: 'login',

  methods: {
    onSubmitLogin() {
      console.log('login')
    }
  }
}
</script>