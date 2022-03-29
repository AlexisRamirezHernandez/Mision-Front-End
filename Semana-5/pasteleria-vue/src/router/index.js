import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidoView from '../views/PedidoView.vue'
import AdminView from '../views/AdminView.vue'
const routes = [
  {
    path: '/index',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: PedidoView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/PedidoView.vue')

  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/PedidoView.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
