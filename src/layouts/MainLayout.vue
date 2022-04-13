<template>
  <div class="main">

    <Header />

    <div class="body">
      <Navbar />
      <div class="content">
        <router-view/>
      </div>
    </div>

  </div>
</template>


<script>
import Header from '@/components/app/Header.vue' 
import Navbar from '@/components/app/Navbar.vue'   

export default {
  name: 'main-layout',
  components: { Header, Navbar }
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