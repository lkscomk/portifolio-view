import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home')
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: () => import('@/views/sobre')
      },
      {
        path: '/habilidades',
        name: 'Habilidades',
        component: () => import('@/views/habilidades')
      },
      {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('@/views/portfolio')
      },
      {
        path: '/contato',
        name: 'Contato',
        component: () => import('@/views/contato')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
