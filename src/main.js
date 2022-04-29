import { createApp } from 'vue'
import M from 'materialize-css' 
import firebase from 'firebase/compat/app';

import App from './App.vue'
import router from './router'
import store from './stores'



// Конфиг для подключение к базе данных
const db = firebase.initializeApp({
  apiKey: "AIzaSyCVfkUq147MWgdv7yfOPgG0u3nguyInIow",
  authDomain: "fitnesclub-bfe0b.firebaseapp.com",
  projectId: "fitnesclub-bfe0b",
  storageBucket: "fitnesclub-bfe0b.appspot.com",
  messagingSenderId: "204703007619",
  appId: "1:204703007619:web:265bccbb3da0b7a9c22cb6",
  measurementId: "G-KNQLR3C3FN"
})


let app = createApp(App)

app.use(router)
app.use(db)
app.use(M)
app.use(store)

app.mount('#app')
