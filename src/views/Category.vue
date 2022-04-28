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
          :category="urlName"
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
      return this.$store.getters.getUserData && this.$store.getters.getUserData.data
    },
    dataCategory() {
      return this.$store.getters.getDataCategory
    },
    subCategory() {
      return this.dataCategory && this.dataCategory.list
    },
    // workoutUser() {
    //   const userWork = this.userData && this.$store.getters.getUserData.workout
    //   // ***********************************
    //   return userWork && Object.keys(userWork) 
    // }
  },

  mounted() {
    this.urlName = this.$route.query.sub
    this.$store.dispatch('fetchDataCategory', this.urlName)
  },

  unmounted() {
    this.$store.commit('clearDataCaregory')
  },

  watch: {
    workoutUser() {
      console.log(this.workoutUser)
    }
  }
};
</script>