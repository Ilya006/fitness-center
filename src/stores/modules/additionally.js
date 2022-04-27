import { getDatabase, ref, update } from "@firebase/database"
import { getAuth } from 'firebase/auth'

export default {
  actions: {
    // Добавить клубную крату
    async clubCard(ctx, isCard) {
      const db = getDatabase()
      const userId = getAuth().currentUser.uid
      const userRef = ref(db, `users/${userId}/data`)

      await update(userRef, {clubCard: isCard})
    },

    // Добавить клубную крату
    async locker(ctx, isLocker) {
      const db = getDatabase()
      const userId = getAuth().currentUser.uid
      const userRef = ref(db, `users/${userId}/data`)

      await update(userRef, {locker: isLocker})
    },

    
  }
}