import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faPhone)
library.add(faArrowCircleRight)
library.add(faWhatsapp)
library.add(faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
