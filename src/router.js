import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Auth/Login.vue'
import Signup from './components/Auth/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login.vue',

      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/Signup',
      name: 'Signup.vue',
      component: Signup
    },
    {
      path: '/Tickets',
      name: 'Tickets.vue',
      component: () => import('./components/Tickets/Tickets.vue')
    },
    {
      path: '/Users',
      name: 'Users.vue',
      component: () => import('./components/Users/Users.vue')
    },
    {
      path: '/Submit-Ticket',
      name: 'Ticket-Submit.vue',
      component: () => import('./components/Tickets/Ticket-Submit.vue')
    },
    {
      path: '*',
      name: 'Page-404.vue',
      component: () => import('./components/Page-404.vue')
    }
  ]
})
