import { getDatabase, onValue, ref, remove, update, get } from "@firebase/database"

export default {
  state: {
    dataCategoty: null,
    dataCategotyRecord: {}
  },

  mutations: {
    setCatData(state, data) {
      state.dataCategoty = data
    },
    clearDataCaregory(state) {
      state.dataCategoty = null
    },
    setInfoCatAll(state, {data, ctgName}) {
      state.dataCategotyRecord = {
        ...state.dataCategotyRecord,
        [ctgName]: data
      }
    }
  },

  getters: {
    getDataCategory(state) {
      return state.dataCategoty
    },
    getDataCatRecord(state) {
      return state.dataCategotyRecord
    }
  },

  actions: {
    // Создать подкатегорию админом
    async createNewSubcategory({ commit }, { subcategory, title, description }) {
      const db = getDatabase()
      const ctgRef = ref(db, `category/${subcategory}/list/${title}`)
      const allCtgRef = ref(db, `category/subCatAll/${title}`)

      await update(ctgRef, {title, description})
      await update(allCtgRef, {title, description})
    },

    // Данные о категориях
    fetchDataCategory({ commit }, nameCtg) {
      const db = getDatabase()
      const ctgRef = ref(db, `category/${nameCtg}`)

      onValue(ctgRef, (snapshot) => {
        const data = snapshot.val()
        commit('setCatData', data)
      })
    },

    //Добавить или отменить свою тренировку
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
    },

    // Получить информацию о всех категориях 
    async fetchInfoCategorys({commit}, ctgName) {
      const db = getDatabase()
      const catRef = ref(db, `category/${ctgName}`)

      const data = await get(catRef)
      commit('setInfoCatAll', {data: data.val(), ctgName})
    },

    // Отменить запись
    async removeRecord({ rootState }, { nameCat, nameSubcat }) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const recordRef = ref(db, `users/${userId}/workout/${nameCat}/${nameSubcat}`)

      await remove(recordRef)
    },

    // Отменить аренду админом
    async adminRemoveRentCard(ctx, {userId, thing}) {
      const db = getDatabase()
      
      const rentRef = ref(db, `adminPanel/${thing}/${userId}`)
      const rentUserRef = ref(db, `users/${userId}/data/${thing}`)

      await remove(rentRef)
      await remove(rentUserRef)
    }
  }
}