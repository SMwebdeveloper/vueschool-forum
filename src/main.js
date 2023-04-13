import Vue from 'vue'
import App from './App'
import router from './router'
import AppDate from '@/components/AppDate.vue'

Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
