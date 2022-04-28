<template>
  <div class="page-light">
    <div class="wrapper">
      <header class="header">
        <div>
          <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="#services">Услуги</a></li>
            <li class="nav-item">
              <router-link class="nav-link" to="search">Поиск</router-link>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Контакты</a></li>
          </ul>
        </div>
        <router-link to="/">
          <img class="header-logo" src="./../../images/logo.svg" alt="Logo" />
        </router-link>
        <ul class="nav nav-info">
          <li class="nav-item nav__link">
            <router-link class="nav-item" to="profile" v-if="userData">Профиль</router-link>
          </li>
          <li v-if="userData" class="nav-item header__name">{{userData.name}}</li>
          <li class="nubex nubex__li nav-item" v-if="userData" @click="onLogout">Выйти</li>
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
      return this.$store.getters.getUserData && this.$store.getters.getUserData.data
    }
  },

  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>