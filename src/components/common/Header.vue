<template>
  <div class="page-light">
    <div class="wrapper">
      <header class="header">
        <div>
          <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="">Услуги</a></li>
            <li class="nav-item"><a class="nav-link" href="">О нас</a></li>
            <li class="nav-item"><a class="nav-link" href="">Контакты</a></li>
          </ul>
        </div>
        <img class="header-logo" src="./../../images/logo.svg" alt="Logo" />
        <ul class="nav nav-info">
          <li class="nav-item"><a class="nav-link" href="">Цены</a></li>
          <li class="nav-item"><a class="nav-link" href="">Тренеры</a></li>
        </ul>
        <div v-if="userData">{{userData.name}}</div>
        <button class="waves-effect waves-light btn" @click="onLogout" v-if="userData">Выйти</button>
        <router-link to="login" class="nubex" v-if="!userData">Войти</router-link>
        <div class="toggle-menu">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </header>
    </div>
  </div>
</template>


<script>
export default {
  name: 'headerComponent',
  computed: {
    userData() {
      return this.$store.getters.getUserData
    }
  },

  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  },

  
}
</script>