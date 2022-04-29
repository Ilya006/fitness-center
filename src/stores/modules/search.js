import { getDatabase, onValue, ref, remove, update } from "@firebase/database"

export default {
  state: {
    searchHistory: null,
    services: null
  },

  mutations: {
    setSearchHistory(state, data) {
      state.searchHistory = data && Object.keys(data)
    },
    setServices(state, data) {
      state.services = data && Object.values(data).filter(cat => cat.list)
    }
  },  

  getters: {
    getSearchHistory(state) {
      return state.searchHistory
    },
    getServices(state) {
      return state.services
    }
  },

  actions: {
    async saveSearchHistory({rootState}, dataSearch) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const searchRef = ref(db, `users/${userId}/searchHistory`)

      const updateHistory = {}
      updateHistory[dataSearch] = true
      await update(searchRef, updateHistory)
    },

    fetchSearchHistory({rootState, commit}) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const searchRef = ref(db, `users/${userId}/searchHistory`)

      onValue(searchRef, (snapshot) => {
        const data = snapshot.val() 
        commit('setSearchHistory', data)
      })
    },

    async fetchServices({commit}) {
      const db = getDatabase()
      const servicesRef = ref(db, 'category')

      onValue(servicesRef, (snapshot) => {
        const data = snapshot.val()
        commit('setServices', data)
      })
    },
  }
}