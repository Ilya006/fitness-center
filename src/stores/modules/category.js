import { getDatabase, onValue, ref, remove, update } from "@firebase/database"

export default {
  state: {
    dataCategoty: null
  },

  mutations: {
    setCatData(state, data) {
      state.dataCategoty = data
    },
    clearDataCaregory(state) {
      state.dataCategoty = null
    }
  },

  getters: {
    getDataCategory(state) {
      return state.dataCategoty
    },

  },

  actions: {
    // Создать подкатегорию админом
    async createNewSubcategory({ commit }, { subcategory, title, description }) {
      const db = getDatabase()
      const ctgRef = ref(db, `caterofy/${subcategory}/list/${title}`)
      await update(ctgRef, {title, description})
      console.log('add')
    },
    // Данные о категориях
    fetchDataCategory({ commit }, nameCtg) {
      const db = getDatabase()
      const ctgRef = ref(db, `caterofy/${nameCtg}`)

      onValue(ctgRef, (snapshot) => {
        const data = snapshot.val()
        commit('setCatData', data)
      })
    },

    //Добавить или удалить свою тренировку
    async workout({ rootState },{ category, subcategory, isWorkout }) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const workoutRef = ref(db, `users/${userId}/workout/${category}`)

      //*******************************************/
      if(!isWorkout) {
        const removeWorkoutRef = ref(db, `users/${userId}/workout/${category}/${subcategory}`)

        await remove(removeWorkoutRef)
        return
      }

      const updateWorkout = {}
      updateWorkout[subcategory] = true

      await update(workoutRef, updateWorkout)
      console.log('add')
    }
  }
}