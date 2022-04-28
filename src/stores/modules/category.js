import { getDatabase, onValue, ref, update } from "@firebase/database"

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
    // Создать подкатегорию
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
  }
}