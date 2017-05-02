import Vue from 'vue'
import { vm, router } from './support/VueRoutedComponent'

describe('HelloComponent', () => {
  before(() => {
    router.push({name: 'hello'})
  })

  it('should render Hello World', () => {
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h1').textContent).to.equal('Hello World!')
    })
  })
})
