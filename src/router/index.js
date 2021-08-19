import Vue from 'vue'
import VueRouter from 'vue-router'
import hashedroutes from './routehashed'
Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/index")
  },
  {
    path: hashedroutes.makeid(200),
    name: 'admin',
    component: () => import("@/views/useradmin/admin_registration")
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
  },
  {
   path: '/dynamicpage',
   name: 'Dynamic',
   component: () => import("@/views/dynamicpage") 
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("@/views/userstudent/student_registration")
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
  },
  {
    path: '/course-page',
    name: 'CoursePage',
    component: () => import("@/views/course")
  }

]

const router = new VueRouter({
  routes
})

export default router
