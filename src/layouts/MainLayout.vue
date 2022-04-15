// этот layout служит для расположения главных элементов на экране таких как header, navbar и главный контент



<template>
  <div class="main">

    <Header />

    <div class="body">
      <Navbar />
      <div class="content">
        <router-view/>
        <div>{{name}}</div>
      </div>
    </div>

  </div>
</template>


<script>
import { storeToRefs } from 'pinia'
import { useInfoStore } from '@/stores/info'
import Header from '@/components/app/Header.vue' 
import Navbar from '@/components/app/Navbar.vue' 

export default {
  name: 'main-layout',
  components: { Header, Navbar },

  setup() {
    const { fetchInfo, click } = useInfoStore() // Ф-ия для получения данных в пользователе
    const { info } = storeToRefs(useInfoStore()) // обьект с данными
    
    return { fetchInfo, info, click }
  },

  computed: {
    name() {
      if(this.info.name) {
        return this.info.name
      } else {
        return 'Гость'
      }
    }
  },


  mounted() {
    this.fetchInfo()
    console.log(this.info)
  }

}
</script>


<style>
  .main {
    display: flex;
    flex-direction: column;
  }

  /* body ====*/
  .body {
    display: flex;
    min-height: calc(100vh - 70px);
  }

  /* content ==*/
  .content {
    flex: 1;
    background-color: rgb(255, 249, 242);
  }

</style>