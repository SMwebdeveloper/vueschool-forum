import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate.vue'

import firebase from 'firebase'

Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

// initialize firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCWudSZYTXeG1bQ2gISmFCT5xgx70qTfDM',
  authDomain: 'vue-school-forum-13cab.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-13cab-default-rtdb.firebaseio.com',
  projectId: 'vue-school-forum-13cab',
  storageBucket: 'vue-school-forum-13cab.appspot.com',
  messagingSenderId: '202803263997',
  appId: '1:202803263997:web:c3f54e26fa45d9dad58194'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
