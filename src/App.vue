<template>
  <div>
    <router-view />
  </div>
</template>


<style>
@import "materialize-css";
@import 'materialize-css/dist/css/materialize.min.css';
@import './assets/style.css';
</style>


<script>
export default {
  name: 'appComponents',
  computed: {
    userId() {
      return this.$store.getters.getUserId
    }
  },

  mounted() {
    this.$store.dispatch('authStateChanged')
  },

  watch: {
    userId() {
      this.$store.dispatch('fetchInfo', this.userId)
    }
  }
}
</script>