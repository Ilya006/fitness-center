<template>
  <HeaderVue />
  <div class="subcategory">
    <div class="wrapper">
      <h3 class="subcategory__title services__title">CИЛОВЫЕ ТРЕНИРОВКИ</h3>
      <h4 class="subcategory__subtitle">
        Базовые упражнения и занятия на тренажерах для работы с основными
        группами мышц
      </h4>
      <div class="row">

        <Card />
        <Card />
        <Card />
        <AdminCard v-if="isAdmin"/>

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
    }
  },

  mounted() {
    this.urlName = this.$route.params.categoryName;
    console.log(this.urlName);
  },

  watch: {
    isAdmin() {
      console.log(this.isAdmin)
    }
  }
};
</script>