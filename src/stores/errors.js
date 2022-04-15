import { defineStore } from 'pinia'

// Тут будет ловить все ошибки

export const useErrorsStore = defineStore('errors', {
  state: () => ({
    error: null
  }),

  getters: {
    getError: (state) => {
      return state.error
    }
  },

  actions: {
    setError(error) {  // Добавляем ошибку 
      this.error = error
    },
    clearError() {    //Чистим все ошибки
      this.error = null
    }
  }
})