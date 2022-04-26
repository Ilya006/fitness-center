import { createStore } from 'vuex'

import auth from './modules/auth'               
import additionally from './modules/additionally'  

export default createStore({
  state: {
    
  },
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    auth,
    additionally,
  },
})