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
    component: () => import("@/views/loginViews/login")
  },
  {
    path:'forgetpass',
    name:'forgetPassword',
    component: () => import("@/views/loginViews/forgetpass")
  },
  {
    path:'resetCode',
    name:'resetByCode',
    component: () => import("@/views/loginViews/resetCode")
  },
  {
    path:'resetPass',
    name:'resetPassword',
    component: () => import("@/views/loginViews/resetPass")
  }

]

const router = new VueRouter({
  routes
})

export default router
