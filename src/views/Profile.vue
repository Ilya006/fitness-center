<template>
  <HeaderVue />

  <div class="profile">
    <div class="container">
      <h3 class="services__title">Все мои записи</h3>
      <div class="row">
        <RecordVue
          v-for="(record, id) in userWorkout"
          :key="id"
          :record="record"
          :recordId="id"
        />
      </div>

      <div class="profile__admin" v-if="isAdmin">
        <h3 class="services__title">Аренда</h3>
        <div class="row">

          <div class="col s6 card__wrap" v-if="allRentCard">
            <div class="card card__bg services__box">
              <div class="card-image">
                <img src="./../images/cart.png" />
              </div>
              <div class="card-content">
                <span class="card-title">Арендованные Карты</span>
                <div class="rent__user">
                  <div class="rent" v-for="(user, id) in allRentCard" :key="id">
                    <div class="rent__name">
                      <span>Имя: </span>{{ user.userName }}
                    </div>
                    <button
                      class="btn-floating waves-effect red waves-light red"
                      @click="onRemoveUserRent(id, 'clubCard')"
                    >
                      <i class="material-icons left">clear</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col s6 card__wrap" v-if="allRentLocker">
            <div class="card card__bg services__box">
              <div class="card-image">
                <img src="./../images/closet.jpg" />
              </div>
              <div class="card-content">
                <span class="card-title">Арендованные шкафчик</span>
                <div class="rent__user">

                  <div class="rent" v-for="(user, id) in allRentLocker" :key="id">
                    <div class="rent__name">
                      <span>Имя: </span>{{ user.userName }}
                    </div>
                    <button
                      class="btn-floating waves-effect red waves-light red"
                      @click="onRemoveUserRent(id, 'locker')"
                    >
                      <i class="material-icons left">clear</i>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderVue from "../components/common/Header.vue";
import RecordVue from "../components/Record.vue";

export default {
  name: "profile",
  components: { HeaderVue, RecordVue },

  computed: {
    userWorkout() {
      return this.$store.getters.getUserWorkout;
    },
    isAdmin() {
      return this.$store.getters.getIsAdmin;
    },
    allRentCard() {
      return this.$store.getters.getAllRentCard;
    },
    allRentLocker() {
      return this.$store.getters.getAllRentLocker;
    }
  },

  methods: {
    onRemoveUserRent(userId, thing) {
      this.$store.dispatch("adminRemoveRentCard", { userId, thing });
    },
  },

  mounted() {
    if (this.isAdmin) {
      this.$store.dispatch("fetchAllRent");
    }
  },

  watch: {
    isAdmin() {
      this.$store.dispatch("fetchAllRent");
    },

    allRentCard() {
      console.log(this.allRentCard);
    },
  },
};
</script>