<template>
  <div class="col s4">
    <div class="card grey lighten-2">
      <div class="card-content grey-text text-darken-3">
        <span class="card-title">{{subCar.title}}</span>
        <p>{{subCar.description}}</p>
      </div>
      <div class="card-action">
        <button 
          class="btn-floating waves-effect" 
          :class="isAddWorkout ? 'green lighten-1' : 'waves-light red'"
          @click="onAddWorkout"
        >
          <i class="material-icons">{{isAddWorkout ? 'check' : 'add'}}</i>
        </button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'cardCategoryCompKey',
  props: ['subCar', 'category'],

  computed: {
    isAddWorkout() {
      const userData = this.$store.getters.getUserData
      const userWorkout = userData && userData.workout && userData.workout[this.category]
      const arrWorkout = userWorkout && Object.keys(userWorkout)
      return arrWorkout && arrWorkout.includes(this.subCar.title)
    }
  },

  methods: {
    onAddWorkout() {
      this.$store.dispatch('workout', {
        category: this.category, 
        subcategory: this.subCar.title, 
        isWorkout: !this.isAddWorkout
      })
    }
  },
}
</script>