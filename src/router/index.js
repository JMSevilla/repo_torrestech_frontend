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
  },
  {
    path: '/admindash',
    name: 'AdminDashboard',
    component: () => import("@/views/admindash_views/AdminDashPage"),
    children: [
      {
        path: '/admindash/add-new-training',
        name: 'AddNewTraining',
        component: () => import("@/views/admindash_views/trainings/add_new_training")
      },
        {
          path: 'admindash/manage-categories',
          name: 'manageCat',
          component: () => import("@/views/admindash_views/trainings/manage_categories")
        }

    ]
   },
    {
      path: '/report-a-bug',
      name: 'ReportABug',
      component: () => import("@/views/ReportABug")
    }
    
]

const router = new VueRouter({
  routes
})

export default router
