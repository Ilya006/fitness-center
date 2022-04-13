import { createApp } from 'vue'
import { createPinia } from 'pinia'

import firebase from 'firebase/compat/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

import App from './App.vue'
import router from './router'


// Конфиг для подключение к базе данных
const db = firebase.initializeApp({
  apiKey: "AIzaSyCxUTUFhsT4GuYZzhbfutEay4D-zaIpNJw",
  authDomain: "hospital-1078b.firebaseapp.com",
  projectId: "hospital-1078b",
  storageBucket: "hospital-1078b.appspot.com",
  messagingSenderId: "372751467788",
  appId: "1:372751467788:web:bddd682c5d45f22a26b529",
  measurementId: "G-H5X88BD422"
})


let app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(db)

app.mount('#app')
