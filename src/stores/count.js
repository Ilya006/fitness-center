import  { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
    name: 'ilya'
  }),

  getters: {
    double: (state) => state.count * 2
  },
  
  actions: {
    increment() {
      this.count++
    }
  },



})