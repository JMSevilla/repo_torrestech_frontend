import Vue from 'vue'
import VueRouter from 'vue-router'
// import hashedroutes from './routehashed'
Vue.use(VueRouter)

function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() *
charactersLength)));
 }
 return result.join('');
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/index")
  },
  {
    path: makeid(200),
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
        path: '/admindash',
        name: 'AdminDashboardTab',
        component: () => import("@/components/dashboard/admin_dashboard/dashboard")
      },
      {
        path: '/admindash/add-new-training/' + makeid(200),
        name: 'AddNewTraining',
        component: () => import("@/views/admindash_views/trainings/add_new_training")
      },
      {
        path: '/admindash/addnewemployee',
        name: 'AddNewEmployee',
        component: () => import("@/views/admindash_views/employee/insert_employee")
      },
      {
        path: '/admindash/allemployee',
        name: 'AllEmployee',
        component: () => import("@/views/admindash_views/employee/employee_list")
      },
      {
        path: '/admindash/employee-info',
        name: 'EmployeeInfo',
        component: () => import("@/views/admindash_views/employee/employee_info")
      },
      {
        path: '/admindash/allstudents',
        name: 'AllStudents',
        component: () => import("@/views/admindash_views/students/all_students")
      },
      {
        path: 'admindash/student-info',
        name: 'StudentInfo',
        component: () => import("@/views/admindash_views/students/student_info")
      },
      {
        path: '/admindash/classcode',
        name: 'ClassCode',
        component: () => import("@/views/admindash_views/students/class_code")
      },
      {
        path: '/admindash/message',
        name: 'Message',
        component: () => import("@/views/admindash_views/students/message_view")
      },
      {
        path: '/admindash/activity-logs',
        name: 'ActivityLog',
        component: () => import("@/views/admindash_views/header/activity_logs")
      },
      {
        path: '/admindash/admin-profile',
        name: 'AdminProfile',
        component: () => import("@/views/admindash_views/header/admin_profile")
      }
    ]
   },
   {
    path: '/employeedash',
    name: 'EmployeeDashboard',
    component: () => import("@/views/employee_dashboard/EmployeeDashPage"),
    children: [
      {
        path: '/employeedash/add-class',
        name: 'AddClass',
        component: () => import("@/views/employee_dashboard/classes/add_class")
      },
      {
        path: '/employeedash/all-class',
        name: 'AllClass',
        component: () => import("@/views/employee_dashboard/classes/all_class")
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
