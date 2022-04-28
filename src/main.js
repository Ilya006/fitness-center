import { createApp } from 'vue'
import M from 'materialize-css' 
import firebase from 'firebase/compat/app';

import App from './App.vue'
import router from './router'
import store from './stores'



// Конфиг для подключение к базе данных
const db = firebase.initializeApp({
  apiKey: "AIzaSyAtv0i9z8lpRapLGz-lqQc4G30paXP7Y-Y",
  authDomain: "fitnesclub-650af.firebaseapp.com",
  projectId: "fitnesclub-650af",
  storageBucket: "fitnesclub-650af.appspot.com",
  messagingSenderId: "157524901896",
  appId: "1:157524901896:web:53edcd8c6d348fb21c51bd",
  measurementId: "G-F2T92Z63CD"
})


let app = createApp(App)

app.use(router)
app.use(db)
app.use(M)
app.use(store)

app.mount('#app')
