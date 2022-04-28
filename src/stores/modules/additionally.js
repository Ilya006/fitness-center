import { getDatabase, ref, remove, update } from "@firebase/database"
import { getAuth } from 'firebase/auth'

export default {
  actions: {
    // Добавить клубную крату
    async clubCard({rootState}, isCard) {
      const db = getDatabase()
      const userId = getAuth().currentUser.uid
      const userName = rootState.auth.userData.name
      const userRef = ref(db, `users/${userId}/data`)
      const adminPanel = ref(db, `adminPanel/clubCard`)
      const adminPanelRemove = ref(db, `adminPanel/clubCard/${userId}`)

      await update(userRef, {clubCard: isCard})

      if(!isCard) {
        remove(adminPanelRemove)
        return
      }

      const updateAdmin = {}
      updateAdmin[userId] = {id: userId, userName}
      await update(adminPanel, updateAdmin)
    },

    // Добавить клубную крату
    async locker({rootState}, isLocker) {
      const db = getDatabase()
      const userId = getAuth().currentUser.uid
      const userName = rootState.auth.userData.name
      const userRef = ref(db, `users/${userId}/data`)
      const adminPanel = ref(db, `adminPanel/locker`)
      const adminPanelRemove = ref(db, `adminPanel/locker/${userId}`)

      await update(userRef, {locker: isLocker})

      if(!isLocker) {
        remove(adminPanelRemove)
        return
      }

      const updateLocker = {}
      updateLocker[userId] = {id: userId, userName}
      await update(adminPanel, updateLocker)
    },

    
  }
}