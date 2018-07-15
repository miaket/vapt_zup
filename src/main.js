import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import { store } from './store/store';

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: '#6a1b9a',
    primaryl: '#9c4dcc',
    primaryd: '#38006b',
    secondary: '#fdd835',
    secondaryl: '#ffff6b',
    secondaryd: '#c6a700',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
}).$mount('#app')
