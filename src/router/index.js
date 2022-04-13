import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('./../views/Register.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main'},
      component: () => import('./../views/Categories.vue')
    },
    {
      path: '/records',
      name: 'records',
      meta: {layout: 'main'},
      component: () => import('./../views/Records.vue')
    },
    {
      path: '/doctors',
      name: 'doctors',
      meta: {layout: 'main'},
      component: () => import('./../views/Doctors.vue')
    },
    
  ]
})

export default router
