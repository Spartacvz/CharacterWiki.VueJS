import Vue from 'vue'
import App from './App.vue'

// Import VueRouter Library, and this app's routes
import VueRouter from 'vue-router'
import router from 'client/src/router'

import BootstrapVue from "bootstrap-vue"

import CharacterApiService from 'client/src/services/characterService.js'

Vue.use(VueRouter) //Use VueRouter

Vue.use(BootstrapVue)
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Add API service to Vue protype
Vue.prototype.$characterService = CharacterApiService

new Vue({
  render: h => h(App),
  router: [
    {
      path: 'client/src/components/PullCharacter.vue',
      name: 'PullCharacter',
      component: CharacterData
    }
  ],
}).$mount('#app')
