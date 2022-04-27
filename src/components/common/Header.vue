<template>
  <div class="page-light">
    <div class="wrapper">
      <header class="header">
        <div>
          <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="#services">Услуги</a></li>
            <li class="nav-item"><a class="nav-link" href="#">О нас</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Контакты</a></li>
          </ul>
        </div>
        <router-link to="/">
          <img class="header-logo" src="./../../images/logo.svg" alt="Logo" />
        </router-link>
        <ul class="nav nav-info">
          <li class="nav-item"><a class="nav-link" href="#">Цены</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Тренеры</a></li>
          <li class="nav-item header__profile">
            <div v-if="userData" class="nav-item header__name">{{userData.name}}</div>
            <button class="waves-effect waves-light btn header__btn" @click="onLogout" v-if="userData">Выйти</button>
          </li>
        </ul>
        
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