import { createRouter, createWebHistory } from 'vue-router'
import ShowCategory from '../views/ShowCategory'
import AddCategory from "@/views/AddCategory";
import CategoryStatus from "@/views/CategoryStatus";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShowCategory
  },
  {
    path: "/add-category",
    name: "Add Category",
    component: AddCategory
  },
  {
    path: "/status/:id",
    name:"status",
    component: CategoryStatus
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
