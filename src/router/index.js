import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/minhasTarefas',
    name: 'Minhas tarefas',
    component: () => import('../views/MinhasTarefas')
  },
  {
    path: '/trabalho',
    name: 'Trabalho',
    component: () => import('../views/Trabalho')
  },
  {
    path: '/pessoal',
    name: 'Pessoal',
    component: () => import('../views/Pessoal')
  },
  {
    path: '*',
    name: '404 Error',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
