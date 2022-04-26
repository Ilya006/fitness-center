<template>
  <div>
    <HeaderVue />
    <MainBodyVue />
  </div>
</template>

<script>
import HeaderVue from "../components/common/Header.vue"
import MainBodyVue from '../components/MainBody.vue'

export default {
  name: 'homePage',
  components: { HeaderVue, MainBodyVue }
}
</script>