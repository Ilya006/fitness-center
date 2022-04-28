import { getDatabase, set, ref, onValue } from 'firebase/database'
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, onAuthStateChanged, 
  signOut 
} from 'firebase/auth'
import router from "@/router"

export default {
  state: {
    userId: null,
    userData: null,
    errorAuth: null,
    loading: true
  },

  mutations: {
    // Установить код ошибки
    setErrorCode(state, errorCode) {
      state.errorAuth = errorCode
    },
    // ID ползователя
    setUserId(state, userId) {
      state.userId = userId
    },
    // Данные ползователя
    setUserData(state, userData) {
      state.userData = userData
    },
    // Отправка запроса
    setLoading(state, load) {
      state.loading = load
    },
    // Очистить ошибки
    clearError(state) {
      state.errorAuth = null
    } 
  },

  getters: {
    getUserId(state) {
      return state.userId
    },
    getUserData(state) {
      return state.userData
    },
    getErrorAuth(state) {
      return state.errorAuth
    },
    getLoading(state) {
      return state.loading
    },
    getIsAdmin(state) {
      return state.userData ? !!state.userData.data.isAdmin : false
    },
    getUserWorkout(state) {
      return state.userData && state.userData.workout && state.userData.workout
    }
  },

  actions: {
    // Войти
    async login({commit}, { email, password }) {
      commit('setLoading', true)
      try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)
        commit('setLoading', false)
        router.push('/')
      } 
      catch (error) { 
        commit('setErrorCode', error.code) 
        commit('setLoading', false)
      }
    },

    // Выход из учетной записи
    async logout({ commit }) {
      try {
        const auth = getAuth()
        await signOut(auth)
        console.log('nulll')
        commit('setUserData', null)
      } 
      catch(error) { commit('setErrorCode', error.code) }
    },

    // Регистрация
    async register({commit}, { name, email, password }) {
      commit('setLoading', true)
      try {
        const auth = getAuth()
        const db = getDatabase()
        await createUserWithEmailAndPassword(auth, email, password)
        const userId = auth.currentUser.uid
        // Добавить имя
        set(ref(db, `users/${userId}/data`), {
          name
        })
        router.push('/')
      } 
      catch (error) { 
        commit('setErrorCode', error.code) 
        commit('setLoading', false)
      }
    },

    // Получить информацию о пользователе
    async fetchInfo({commit}, userId) {
      const db = getDatabase()
      const profileRef = ref(db, `users/${userId}`)
      try {
        onValue(profileRef, (snapshot) => { 
          const data = snapshot.val()
          commit('setUserData', data)
        })
      } catch (error) {
        console.log('errr')
        throw error
      }
    },

    // Сессия пользователя
    authStateChanged({ commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        const userId = user && user.uid
        commit('setUserId', userId)
      })
    },

    // Очистить ошибки
    clearError: (ctx) => {
      ctx.commit('clearError')
    },
  }
}