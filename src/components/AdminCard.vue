<template>
  <div class="col s4">
    <div class="card blue-grey darken-1">
      <div class="card-content grey-text text-lighten-3" v-if="!toggleEdit">
        <span class="card-title">Андрей</span>
        <p>
          Вы являетесь администратором сайта! Вы можете добавить новые категории
          тренировок
        </p>
      </div>

      <div class="card-content grey-text text-lighten-3" v-if="toggleEdit">
        <div class="input-field card-title">
          <input
            type="text"
            class="grey-text text-lighten-3"
            :class="title && 'validate'"
            placeholder="Заголовок"
            v-model="title"
          />
        </div>
        <div class="input-field card-title">
          <input
            type="text"
            class="grey-text text-lighten-3"
            placeholder="Описания"
            :class="description && 'validate'"
            v-model="description"
          />
        </div>
      </div>

      <div class="card-action">
        <div class="card__bottom">
          <button 
            class="btn-floating btn-medium waves-effect waves-light red" 
            v-if="toggleEdit"
            @click="cancelAdding"
          >
            <i class="large material-icons" >clear</i>
          </button>

          <button 
            class="btn-floating waves-effect green accent-4" 
            v-if="toggleEdit"
            @click="onAddNewCategory"
          >
            <i class="large material-icons" >add</i>
          </button>
        </div>

          <button 
            class="btn waves-effect" 
            @click="openEdit" 
            v-if="!toggleEdit"
          >
            Добавить новую категорию
          </button>
        
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "CardCategory",

  data: () => ({
    title: '',
    description: '',
    toggleEdit: false
  }),

  methods: {
    openEdit() {
      this.toggleEdit = true
    },
    cancelAdding() {
      this.toggleEdit = false
      this.title = ''
      this.description = ''
    },
    onAddNewCategory() {
      console.log(this.title)
      console.log(this.description)
    }
  }
};
</script>