import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useLoginStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  getters: {
   
  },
  
  actions: {
    // Авторизация пользователя
    async loginUser(email, password) {
      // getAuth() нужен для firebase
      const auth = getAuth()
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
      } catch (error) {
        throw error // Прокидываем ошибку выше чтобы обработать ее в login.vue
      }
    } 
  },




})