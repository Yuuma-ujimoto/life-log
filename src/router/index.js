import { createRouter, createWebHistory } from 'vue-router'
import ShowCategory from '../views/ShowCategory'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShowCategory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
