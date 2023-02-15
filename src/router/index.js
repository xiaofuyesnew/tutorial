import { createRouter, createWebHistory } from 'vue-router'

const prefix = import.meta.env.VITE_GITHUB ? '/tutorial' : ''

const routes = [
  {
    path: `${prefix}/`,
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: `${prefix}/login`,
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: `${prefix}/auth`,
    name: 'Auth',
    component: () => import('@/pages/Auth.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
