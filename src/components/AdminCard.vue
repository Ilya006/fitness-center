<template>
  <div class="col s12">
    <div class="col s4">
      <div class="card blue-grey darken-1">
        <div class="card-content grey-text text-lighten-3" v-if="!toggleEdit">
          <span class="card-title">{{userName}}!</span>
          <p>
            Вы являетесь администратором сайта! Вы можете добавить новые категории
            тренировок
          </p>
        </div>

        <div class="card-content grey-text text-lighten-3" v-if="toggleEdit">
          <div class="input-field card-title">
            <input
              type="text"
              required
              class="grey-text text-lighten-3"
              :class="!title && 'invalid'"
              placeholder="Заголовок"
              v-model="title"
            />
          </div>
          <div class="input-field card-title">
            <input
              type="text"
              required
              class="grey-text text-lighten-3"
              placeholder="Описания"
              :class="!description && 'invalid'"
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
  </div>
</template>



<script>
export default {
  name: "CardCategory",
  props: ['userName', 'urlName'],

  data: () => ({
    title: '',
    description: '',
    toggleEdit: false
  }),

  methods: {
    openEdit() {
      this.toggleEdit = true
      this.title = ''
      this.description = ''
    },
    cancelAdding() {
      this.toggleEdit = false
      this.title = ''
      this.description = ''
    },
    onAddNewCategory() {
      if(this.title && this.description) {
        const payload = {
          subcategory: this.urlName,
          title: this.title,
          description: this.description
        }
        this.$store.dispatch('createNewSubcategory', payload)


        this.toggleEdit = false
      }
    },
  },
};
</script>