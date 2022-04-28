<template>
  <HeaderVue />

  <div class="subcategory">
    <div class="wrapper">
      <h3 class="subcategory__title services__title">{{dataCategory && dataCategory.title}}</h3>
      <h4 class="subcategory__subtitle">{{dataCategory && dataCategory.description}}</h4>
      <div class="row">

        <Card 
          v-for="(subCar, id) in subCategory"
          :key="id"
          :subCar="subCar"
        />
        
        <AdminCard 
          v-if="isAdmin"
          :userName="userData && userData.name"
          :urlName="urlName"
        />
      
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/common/Header.vue";
import AdminCard from '../components/AdminCard.vue'
import Card from "../components/Card.vue";

export default {
  name: "categoryPage",
  components: { HeaderVue, AdminCard, Card },

  data: () => ({
    urlName: null,
    toggleEdit: false
  }),

  computed: {
    isAdmin() {
      return this.$store.getters.getIsAdmin
    },
    userData() {
      return this.$store.getters.getUserData
    },
    dataCategory() {
      return this.$store.getters.getDataCategory
    },
    subCategory() {
      return this.dataCategory && this.dataCategory.list
    }
  },

  mounted() {
    this.urlName = this.$route.query.sub
    this.$store.dispatch('fetchDataCategory', this.urlName)
  },

  unmounted() {
    this.$store.commit('clearDataCaregory')
  },
};
</script>