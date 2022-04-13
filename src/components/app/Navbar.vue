<template>
  <nav class="nav">

    <router-link 
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      class="link" 
      active-class="active" 
    >
      {{link.title}}
    </router-link>
    
  </nav>
</template>


<script>
export default {
  data: () => ({
    links: [
      {title: 'Профиль', url: '/', exact: true},
      {title: 'Мои записи', url: 'records'},
      {title: 'Поиск Доктора', url: 'doctors'},
    ]
  })
}
</script>


<style>
  .nav {
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: rgb(255, 249, 242);
    border-right: 1px solid rgb(198, 198, 198);
  }
  .link {
    padding: 15px;
    border-bottom: 1px solid rgb(223, 221, 221);
    text-decoration: none;
  } 
  .link:hover {
    background: rgb(202, 201, 201); 
  }
  .link:active {
    color: inherit;
  }
  .active {
    background-color: rgb(223, 221, 221);
  }
</style>