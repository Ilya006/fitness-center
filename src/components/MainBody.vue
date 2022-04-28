<template>
    <div class=" page-light page-light-content">
      <div class="main__bg page">
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

  <Additional />

  <section class="services" id="services">
    <div class="wrapper">
      <h3 class="services__title">УСЛУГИ</h3>
      <div class="row services-margin">
        
        <div class="col s6 category">
          <h3 @click="onPowerTraining" class="category__title">
            CИЛОВЫЕ ТРЕНИРОВКИ
          </h3>
          <div class="category__img">
            <img src="./../images/cat1.jpg" alt="" />
          </div>
        </div>

        <div class="col s6 category">
          <h3 class="category__title" @click="onMiniBody">
            ПРОГРАММЫ MIND BODY
          </h3>
          <div class="category__img">
            <img src="./../images/cat2.jpg" alt="" />
          </div>
        </div>

        <div class="col s6 category">
          <h3 class="category__title" @click="onMixedPrograms">
            СМЕШАННЫЕ ПРОГРАММЫ
          </h3>
          <div class="category__img">
            <img src="./../images/cat3.jpg" alt="" />
          </div>
        </div>

        <div class="col s6 category">
          <h3 class="category__title" @click="onCardioWorkout">
            КАРДИО ТРЕНИРОВКИ
          </h3>
          <div class="category__img">
            <img src="./../images/cat4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Additional from '@/components/Additional.vue'

export default {
  name: "mainBody",
  components: { Additional },

  methods: {
    onPowerTraining() {
      this.$router.push({ path: 'category', query: { 'sub': 'powerTraining' }})
    },
    onMiniBody() {
      this.$router.push({ path: 'category', query: { 'sub': 'miniBody' }})
    },
    onMixedPrograms() {
      this.$router.push({ path: 'category', query: { 'sub': 'mixedPrograms' }})
    },
    onCardioWorkout() {
      this.$router.push({ path: 'category', query: { 'sub': 'cardioWorkout' }})
    },
  },
};
</script>