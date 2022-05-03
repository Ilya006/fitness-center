<template>
  <HeaderVue />

  <div class="subcategory">
    <div class="wrapper">
      <h3 class="subcategory__title services__title">{{dataCategory && dataCategory.title}}</h3>
      <h4 class="subcategory__subtitle">{{dataCategory && dataCategory.description}}</h4>
      <div class="row">

        <div v-if="!userData" class="col s12 card__info">
          Для записи на тренировку <router-link to="login"> АВТОРИЗУЙТЕСЬ!</router-link>
        </div>

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
          :setShow="setShow"
        />
      
      </div>
    </div>

    <div class="cat__msg" :class="isShowMsg ? 'cat__msg--visible' : ''">Новая тренировка добавлена!</div>
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
    toggleEdit: false,
    isShowMsg: false
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
  },

  methods: {
    setShow() {
      console.log('add')
      this.isShowMsg = true
    }
  },

  mounted() {
    this.urlName = this.$route.query.sub
    this.$store.dispatch('fetchDataCategory', this.urlName)
  },

  unmounted() {
    this.$store.commit('clearDataCaregory')
  },

  watch: {
    isShowMsg() {
      if(this.isShowMsg) {
        setTimeout(() => {
          this.isShowMsg = false
        }, 3000);
      }
    }
  }
};
</script>