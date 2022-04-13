import { defineStore } from 'pinia'
import { getDatabase, ref, set  } from 'firebase/database'
import { getAuth, signInWithEmailAndPassword, signOut,  } from "firebase/auth";


export const useAuthStore = defineStore('auth', {
  state: () => ({
    
  }),
  
  actions: {

    // Авторизация пользователя
    async login(email, password) {
      // getAuth() нужен для firebase
      const auth = getAuth()
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)

        set(ref(db, `users/${uid}`), {
          username: 'ilya'
        })

        console.log(getAuth().currentUser)


      } catch (error) {
        throw error // Прокидываем ошибку выше чтобы обработать ее в login.vue
      }
    },

    // Регистрация пользователя
    async register(email, password, name) {
      const auth = getAuth()
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password) // Регистрация

        const uid = this.getUid() // получаем ID для следующего действия
        const db = getDatabase() 
        set(ref(db, `users/${uid}`), {  //записывем в поле name имя 
          username: name
        })

        console.log(uid)
      } catch (error) {
        throw error // Прокидываем ошибку выше чтобы обработать ее в register.vue
      }
    },

    // Выйти из Учетки 
    async logout() {
      const auth = getAuth()
      try {
        await signOut(auth)
        console.log('вы вышли')
      } catch (error) {
        console.log('сломалось при выходе')
        throw error
      }
    },

    // Получить ID пользователя
    getUid() {
      const user = getAuth().currentUser  //Вся инфа о пользователе
      return user ? user.uid : null    //если пользователь есть то вернем его ID
    }


  },




})