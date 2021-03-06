import { createStore } from 'vuex'

import auth from './modules/auth'               
import additionally from './modules/additionally'  
import category from './modules/category'  
import search from './modules/search'  

export default createStore({
  state: {
    
  },
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    auth,
    additionally,
    category,
    search
  },
})