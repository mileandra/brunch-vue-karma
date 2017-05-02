import 'es6-promise/auto' // Needed to get vuex to work in PhantomJS

import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import store from 'store'
import routes from 'config/routes'

Vue.use(Router)
const router = new Router({
  routes
})
const vm = new Vue({
  el: document.createElement('div'),
  router,
  store,
  render: h => h('router-view')
}).$mount()

export {
  vm,
  router
}
