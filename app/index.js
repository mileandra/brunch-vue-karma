import Vue from 'vue'
import Router from 'vue-router'

import routes from './config/routes'
import store from './store'
import App from './App'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
