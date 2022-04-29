import { getDatabase, onValue, query, ref, remove, update } from "@firebase/database"

export default {
  state: {
    searchHistory: null
  },

  mutations: {
    setSearchHistory(state, data) {
      state.searchHistory = data && Object.keys(data)
    }
  },  

  getters: {
    getSearchHistory(state) {
      return state.searchHistory
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

    searchЫervices({commit}, search) {
      const db = getDatabase()
      const que = query(ref(db, 'category'))
    }
  }
}