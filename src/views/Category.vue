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

        <div class="col s4">
          <div class="card grey lighten-2">
            <div class="card-content grey-text text-darken-3">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a class="btn-floating teal lighten-2">  <i class="material-icons">add</i></a>
            </div>
          </div>
        </div>

        <div class="col s4">
          <div class="card grey lighten-2">
            <div class="card-content grey-text text-darken-3">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a class="btn-floating teal lighten-2">  <i class="material-icons">add</i></a>
            </div>
          </div>
        </div>

        <div class="col s4">
          <div class="card grey lighten-2">
            <div class="card-content grey-text text-darken-3">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a class="btn-floating teal lighten-2">  <i class="material-icons">add</i></a>
            </div>
          </div>
        </div>

        <CardCategory />

      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/common/Header.vue";
import CardCategory from '../components/CardCategory.vue'

export default {
  name: "categoryPage",
  components: { HeaderVue, CardCategory },

  data: () => ({
    urlName: null,
    toggleEdit: false
  }),

  methods: {},

  mounted() {
    this.urlName = this.$route.params.categoryName;
    console.log(this.urlName);
  },
};
</script>