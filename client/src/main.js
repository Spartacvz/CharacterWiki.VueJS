import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue';

import CharacterAPIService from '@/services/characterService'

Vue.use(VueRouter)

// Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Add API service to Vue prototype
Vue.prototype.characterService = CharacterAPIService

new Vue({
  render: h => h(App),
  router      /* Include routes */
}).$mount('#app')