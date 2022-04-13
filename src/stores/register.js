import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useRegisterStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  getters: {
    // Вернет данные о пользователе
    user (state) {
      return state.user
    },

    // Авторизован ли пользователь "true || false"
    checkUser (state) {
      return !!state.user
    }
  },
  
  actions: {
    // Регистрация пользователя
     
  },




})