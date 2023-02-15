import { createApp } from 'vue'
import router from '@/router'
import { pinia } from '@/store'

import App from './App.vue'

import './style.css'

const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .mount('#app')
