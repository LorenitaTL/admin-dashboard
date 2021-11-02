import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import adminDashboardRouter from '../modules/dashboard/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/admin'
  },
  {
    path: '/admin',
    ...adminDashboardRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
