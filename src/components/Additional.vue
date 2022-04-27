<template>
  <section class="services">
    <div class="wrapper">
      <h3 class="services__title">КЛУБНЫЕ КАРТЫ И ШКАФЧИК</h3>

      <div class="row">
        <div class="col s6 card__wrap">
          <div class="card card__bg services__box">
            <div class="card-image">
              <img src="./../images/cart.png">
              <button 
                class="btn-floating btn-large halfway-fab waves-effect " 
                :class="isClubCard ? 'green lighten-1' : 'waves-light red'"
                @click="onClubCard"
              >
                <i class="material-icons">{{isClubCard ? 'check' : 'add'}}</i>
              </button>
            </div>
            <div class="card-content">
              <span class="card-title">Клубная карта</span>
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>

        <div class="col s6 card__wrap">
          <div class="card card__bg services__box">
            <div class="card-image">
              <img src="./../images/closet.jpg" >
              <button 
                class="btn-floating btn-large halfway-fab waves-effect waves-light red"
                :class="isClubCard ? 'green lighten-1' : 'waves-light red'"
                @click="onLocker"
              >
                <i class="material-icons">{{isLocker ? 'check' : 'add'}}</i>
              </button>
            </div>
            <div class="card-content">
              <span class="card-title">Шкафчик</span>
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>

        <p>{{isClubCard}}</p>
        <p>{{isLocker}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Additional",

  computed: {
    isClubCard() {
      const userData = this.$store.getters.getUserData
      return userData && userData.clubCard
    },
    isLocker() {
      const userData = this.$store.getters.getUserData
      return userData && userData.locker
    }
  },

  methods: {
    // Добавить карту 
    onClubCard() {
      console.log(2222)
      this.$store.dispatch('clubCard', !this.isClubCard)
    },
    // Добавить шкафчик
    onLocker() {
      this.$store.dispatch('locker', !this.isLocker)
    },
  },
};
</script>
