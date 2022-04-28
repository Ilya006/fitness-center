import { getDatabase, onValue, ref, remove, update } from "@firebase/database"

export default {
  actions: {
    async saveSearchHistory({rootState}, dataSearch) {
      const db = getDatabase()
      const userId = rootState.auth.userId
      const searchRef = ref(db, `users/${userId}/searchHistory`)

      const updateHistory = {}
      updateHistory[dataSearch] = true
      await update(searchRef, updateHistory)
      console.log('save')
    }
  }
}