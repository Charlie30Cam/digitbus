import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas
import Home from '../views/Home.vue'
import Historial from '../views/Historial.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/historial', component: Historial }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
