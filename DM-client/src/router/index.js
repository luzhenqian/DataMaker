import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import OverviewMap from '@/pages/OverviewMap'
import Desulphurization from '@/pages/Desulphurization'
import WasteHeatGeneration from '@/pages/WasteHeatGeneration'
import EnvironmentalProtectionAndDustRemoval from '@/pages/EnvironmentalProtectionAndDustRemoval'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: OverviewMap
    },
    {
      path: '/overviewMap',
      name: 'overviewMap',
      component: OverviewMap
    },
    {
      path: '/desulphurization',
      name: 'desulphurization',
      component: Desulphurization
    },
    {
      path: '/wasteHeatGeneration',
      name: 'wasteHeatGeneration',
      component: WasteHeatGeneration
    }
  ]
})
