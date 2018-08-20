import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import OverviewMap2 from '@/pages/1-2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    /*{
      path: '/overviewMap',
      name: 'overviewMap',
      component: OverviewMap
    },*/
    {
      path: '/1-2',
      name: '1-2',
      component: OverviewMap2
    }
  ]
})
