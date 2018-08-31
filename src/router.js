import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from './components/DashBoard.vue'
import Login from './components/Login.vue'
import MainPage from './components/MainPage.vue'


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
          component: MainPage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
