import { endAt, endBefore, equalTo, get, getDatabase, onValue, orderByChild, query, ref, remove, startAfter, startAt, update } from "@firebase/database"

export default {
  state: {
    searchHistory: null,
    searchingResults: null
  },

  mutations: {
    setSearchHistory(state, data) {
      state.searchHistory = data && Object.keys(data)
    },
    setSearchingResults(state, data) {
      state.searchingResults = data ? data : 'Ничего не найдено'
    }
  },  

  getters: {
    getSearchHistory(state) {
      return state.searchHistory
    },
    getSearchingResults(state) {
      return state.searchingResults
    }
  },

  actions: {
    // Сохранить историю поиска
    async saveSearchHistory({rootState}, dataSearch) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const searchRef = ref(db, `users/${userId}/searchHistory`)

      const updateHistory = {}
      updateHistory[dataSearch] = true
      await update(searchRef, updateHistory)
    },
    // Получить историю поиска
    fetchSearchHistory({rootState, commit}) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const searchRef = ref(db, `users/${userId}/searchHistory`)

      onValue(searchRef, (snapshot) => {
        const data = snapshot.val() 
        commit('setSearchHistory', data)
      })
    },
    // Найти совпадения 
    async searchServices({commit}, search) {
      const db = getDatabase()
      const que = query(ref(db, 'category/subCatAll'), orderByChild('title'), equalTo(search))
      const data = await get(que)

      commit('setSearchingResults', data.val())
    },
    // тест
    async onClick({commit, rootState}) {
      const db = getDatabase()
      const que = query(ref(db, 'category/subCatAll'), orderByChild('title'), startAt('сила'))

      const data = await get(que)
      setSearchingResults(data.val())
    }
  }
}