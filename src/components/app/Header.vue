<template>
  <header class="header">
      <h2>Больница №6</h2>
      <div class="user">
        <h3>Павел Кузнецов</h3>
        <button @click.prevent="logout">Выйти</button>
      </div>
    </header>
</template>


<script>
export default {
  name: 'Header', 

  methods: {
    logout() {
      console.log('logout')
      this.$router.push('/login')
    }
  },

}
</script>


<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #ff9d23;
  }

  .user {
    display: flex;
    align-content: center;
  }
</style>