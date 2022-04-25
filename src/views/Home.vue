<template>
  <div>
    <Header />
    <MainBody />
  </div>
</template>

<script>
import Header from "../components/common/Header.vue"
import MainBody from '../components/MainBody.vue'

export default {
  name: 'home',
  components: { Header, MainBody }
}
</script>