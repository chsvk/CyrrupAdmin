import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from './components/DashBoard.vue'
import Login from './components/Login.vue'
import MainPage from './components/MainPage.vue'
import Overview from './MainPage/Overview.vue'
import Trips from './MainPage/Trips.vue'
import Alerts from './MainPage/Alerts.vue'
import MapView from './MainPage/MapView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/DashBoard',
      name: 'dashboard',
      component: DashBoard,
      children: [
        {
          path: '/',
          name: 'main',
          component: MainPage,
          children: [
            {
                path: '/',
                name: 'overview',
                component: Overview
            },
            {
              path: 'trips',
              name: 'trips',
              component: Trips
            },
            {
              path: 'alerts',
              name: 'alerts',
              component: Alerts
            },
            {
              path: 'map',
              name: 'map',
              component: MapView
            }
          ]
        },
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
