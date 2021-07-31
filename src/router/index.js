import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/index")
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import("@/views/AboutUs")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/login")
  }

]

const router = new VueRouter({
  routes
})

export default router
