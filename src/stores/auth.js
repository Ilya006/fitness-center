import  { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    
  }),

  getters: {
    
  },
  
  actions: {
    async login(email, password) {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    }
  },



})