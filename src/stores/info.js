import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { getDatabase, ref, child, get } from 'firebase/database'

export const useInfoStore = defineStore('info', {
  state: () => ({
    info: {}
  }),

  actions: {
    // Получение данных
    async fetchInfo() {
      const userId = useAuthStore().getUid()                 // Получаем ID пользователя
      const dbRef = ref(getDatabase())

      const info = await get(child(dbRef, `users/${userId}/info`))
      this.info = info.val()
    },


    click() {
      setTimeout(() => {
        this.info = 'safasdfasf'
      }, 1000);
    },


    // Очистка данных
    clearInfo() {
      this.info = {}
    }
  }
})