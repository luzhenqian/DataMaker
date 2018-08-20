import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import OverviewMap from '@/pages/OverviewMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/overviewMap',
      name: 'overviewMap',
      component: OverviewMap
    }
  ]
})
