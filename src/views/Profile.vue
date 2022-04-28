<template>
  <HeaderVue />

  <div class="profile">
    <div class="container">
      <h3 class="services__title">Все мои записи</h3>
      <div class="row">
        <RecordVue
          v-for="(record, id) in  userWorkout"
          :key="id"
          :record="record"
          :recordId="id"
        />
      </div>

      <div class="profile__admin">
        <h3 class="services__title">Аренда</h3>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderVue from "../components/common/Header.vue";
import RecordVue from '../components/Record.vue'

export default {
  name: "profile",
  components: { HeaderVue, RecordVue },

  computed: {
    userWorkout() {
      return this.$store.getters.getUserWorkout
    }
  },

  watch: {
    userWorkout() {
      console.log(this.userWorkout)
    }
  }
};
</script>