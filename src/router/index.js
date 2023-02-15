import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: `/`,
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: `/login`,
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: `/auth`,
    name: 'Auth',
    component: () => import('@/pages/Auth.vue')
  }
]

export default createRouter({
  history: import.meta.env.VITE_GITHUB ? createWebHashHistory() : createWebHistory(),
  routes
})
