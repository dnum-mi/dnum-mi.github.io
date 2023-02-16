import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/AppHome.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'ContactForm',
    component: ContactForm,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL || ''),
  routes,
})

export default router
