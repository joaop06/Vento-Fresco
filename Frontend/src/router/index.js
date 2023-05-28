// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),

  },
  {
    path: '/login_cadastro',
    name: 'Login_Cadastro',
    component: () => import('@/views/Login_Cadastro.vue'),

  },
  {
    path: '/produto/:parametro',
    name: 'Produto',
    component: () => import('@/views/Produto.vue'),

  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('@/views/Perfil.vue')
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: () => import('@/views/Carrinho.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
