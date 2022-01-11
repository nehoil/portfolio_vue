import Vue from 'vue'
import VueRouter from 'vue-router'
import portfolioApp from '@/views/portfolio.app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: portfolioApp
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
