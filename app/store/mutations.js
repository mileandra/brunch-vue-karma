import * as types from './mutationTypes'

export default {
  [types.SET_GREETING] (state, greeting) {
    state.greeting = greeting
  }
}
