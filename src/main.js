import { createApp } from 'vue'
import M from 'materialize-css' 
import firebase from 'firebase/compat/app';

import App from './App.vue'
import router from './router'
import store from './stores'



// Конфиг для подключение к базе данных
const db = firebase.initializeApp({
  apiKey: "AIzaSyCBTAV_mZ2bv0EK3WefELlyHucR9RiFUfc",
  authDomain: "fitnessclub-1ba9d.firebaseapp.com",
  projectId: "fitnessclub-1ba9d",
  storageBucket: "fitnessclub-1ba9d.appspot.com",
  messagingSenderId: "292636102986",
  appId: "1:292636102986:web:155d19259d7b795db9f1b3",
  measurementId: "G-2F0XKFFKTC"
})


let app = createApp(App)

app.use(router)
app.use(db)
app.use(M)
app.use(store)

app.mount('#app')
