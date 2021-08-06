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
  },
  {
    path:'forgetpass',
    name:'forgetPassword',
    component: () => import("@/views/forgetpass")
  },
  {
    path:'resetCode',
    name:'resetByCode',
    component: () => import("@/views/resetCode")
  },
  {
    path:'resetPass',
    name:'resetPassword',
    component: () => import("@/views/resetPass")
  },
  {
   path: '/dynamicpage',
   name: 'Dynamic',
   component: () => import("@/views/dynamicpage") 
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("@/views/Signup")
  },
  {
    path: '/termsandcondition',
    name: 'TermsAndConditions',
    component: () => import("@/views/TermsAndConditions") 
  },
  {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: () => import("@/views/PrivacyPolicy")
  }
]

const router = new VueRouter({
  routes
})

export default router
