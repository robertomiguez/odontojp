import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Home', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(Home, {
      mocks: {
        $vuetify: { breakpoint: {} }
      }
    })

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
