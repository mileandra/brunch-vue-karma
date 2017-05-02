import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  greeting: 'Hello World!'
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
