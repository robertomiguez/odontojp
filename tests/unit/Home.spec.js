import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Home from '@/views/Home'

Vue.use(Vuetify)

describe('Home', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(Home)
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Checking DIV subtitle tag text', () =>{
    const wrapper = shallowMount(Home)
    const div = wrapper.find('div')
    expect(div.text()).toBe('Bemvindo ao Consultório!')
  })
})
