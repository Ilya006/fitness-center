import {  equalTo, get, getDatabase, onValue, orderByChild, query, ref, remove, startAt, update } from "@firebase/database"

export default {
  state: {
    searchHistory: null,
    searchingResults: null,
    isEmpty: false
  },

  mutations: {
    setSearchHistory(state, data) {
      state.searchHistory = data && Object
        .keys(data)
        .map(date => [date, data[date]])
        .reverse()
    },
    setSearchingResults(state, data) {
      state.searchingResults = data ? data : state.isEmpty = true
    },
    clearRedults(state) {
      state.searchingResults = null
      state.isEmpty = false
    },
  },  

  getters: {
    getSearchHistory(state) {
      return state.searchHistory
    },
    getSearchingResults(state) {
      return state.searchingResults
    },
    getIsEmpty(state) {
      return state.isEmpty
    }
  },

  actions: {
    // Сохранить историю поиска
    async saveSearchHistory({rootState}, dataSearch) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const date = new Date()
      const searchRef = ref(db, `users/${userId}/searchHistory`)

      const dateDay = date.toISOString().split('T')[0]
      const time = date.toLocaleTimeString()

      const updateHistory = {}
      updateHistory[`${dateDay} ${time}`] = dataSearch
      await update(searchRef, updateHistory)

      // Очистка истории в БД
      const history = rootState.search.searchHistory
      const removeRecord = history.length > 5 && history[5][0]
      if(removeRecord) {
        const recordRef = ref(db, `users/${userId}/searchHistory/${removeRecord}`)
        remove(recordRef)
        console.log('remove')
      }
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