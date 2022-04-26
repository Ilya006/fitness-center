<template>
  <div class="page page-light page-light-content">
    <div class="wrapper">
      <div class="main">
        <div class="main-item sale">
          <p class="sale-description">Фитнес-центр в Москве</p>
          <h1 class="sale-title">СКИДКИ ДО 30%</h1>
          <a class="btn" href="">Подробнее</a>
        </div>
        <div class="main-item box">
          <div class="box-price">
            <strike class="box-price-old">30 000 ₽</strike>
            <p class="box-price-new">21 000 ₽</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page page-dark notice">
    <div class="wrapper">
      <h1 class="notice-title">
        <span>Гарантии и рекомендации от лучших специалистов</span>
      </h1>
      <p class="notice-description">
        Воспользуйтесь услугами и получите скидку!
      </p>
    </div>
  </div>
  
  <div class="services">
    <div class="wrapper">
      <h3 class="services__title">Услуги Фитнес-центра</h3>

      <div class="row services-margin">
        <div class="col s6 category">
          <router-link to="category">
            <h3 @click="powerTraining" class="category__title">CИЛОВЫЕ ТРЕНИРОВКИ</h3>
          </router-link>
          <div class="category__img">
            <img src="./../images/img-force.jpg" alt="">
          </div>
        </div>

        <div  class="col s6 category">
          <router-link to="category">
            <h3 class="category__title" @click="onMiniBody">ПРОГРАММЫ MIND BODY</h3>
          </router-link>
          <div class="category__img">
            <img src="./../images/img-force.jpg" alt="">
          </div>
        </div>

        <div class="col s6 category">
          <router-link to="category">
            <h3 class="category__title" @click="onMixedPrograms">СМЕШАННЫЕ ПРОГРАММЫ</h3>
          </router-link>
          <div class="category__img">
            <img src="./../images/img-force.jpg" alt="">
          </div>
        </div>

        <div class="col s6 category">
          <router-link to="category">
            <h3 class="category__title" @click="onCardioWorkout">КАРДИО ТРЕНИРОВКИ</h3>
          </router-link>
          <div class="category__img">
            <img src="./../images/img-force.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'mainBody',

  methods: {
    powerTraining() {
      this.$router.push({ name: 'category', params: { categoryName: 'PowerTraining' }})
    },
    onMiniBody() {
      this.$router.push({ name: 'category', params: { categoryName: 'MiniBody' }})
    },
    onMixedPrograms() {
      this.$router.push({ name: 'category', params: { categoryName: 'MixedPrograms' }})
    },
    onCardioWorkout() {
      this.$router.push({ name: 'category', params: { categoryName: 'CardioWorkout' }})
    }
  }
}
</script>