import { createStore } from 'vuex'

import auth from './modules/auth'               // Авторизация

export default createStore({
  state: {
    
  },
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    auth,
  },
})