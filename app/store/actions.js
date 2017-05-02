import * as types from './mutationTypes'

export default {
  setGreeting ({ commit }, greeting) {
    commit(types.SET_GREETING, greeting)
  }
}
