import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas
import Home from '../views/Home.vue'
import Historial from '../views/Historial.vue'

import PagoSucursal from '../views/PagoSucursal.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/historial', component: Historial },
  { path: '/pago-sucursal', component: PagoSucursal }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
