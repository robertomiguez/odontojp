import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Localizacao from './views/Localizacao.vue'
import Contato from './views/Contato.vue'
import Agendamento from './views/Agendamento.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { subPage: 'Início' }
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
      meta: { subPage: 'Contato' }
    },
    {
      path: '/agendamento',
      name: 'agendamento',
      component: Agendamento,
      meta: { subPage: 'Agendamento' }
    },
    {
      path: '/localizacao',
      name: 'localizacao',
      component: Localizacao,
      meta: { subPage: 'Localização' }
    }
  ]
})
