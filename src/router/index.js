import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/pages/Auth.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
