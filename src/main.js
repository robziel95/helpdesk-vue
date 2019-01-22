import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import Vuelidate from 'vuelidate'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuelidate)
axios.defaults.baseURL = 'http://localhost:3000/'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
