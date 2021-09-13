import {
  checkadminprocess, adminprocess, classcodescannerprocess, registrationstudentprocess, reportabugprocess
} from './request'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detector : "",
    adminsetup_response : "",
    classcode_checker: "",
    studentReg: "",
    report: "" 
  },
  mutations: {
    mutate_check_admin_registration:(state, data) => {
      return state.detector = data
    },
    mutate_admin_store_setup : (state, data) => {
      return state.adminsetup_response = data
    },
    mutate_check_classcode_reg: (state, data) => {
      return state.classcode_checker = data
    },
    mutate_student_signup: (state, data) => {
      return state.studentReg = data
    },
    mutate_bug_report: (state, data) => {
      return state.report = data
    }
  },
  getters: {
    claims_get_admin : (state) => {
      return state.detector
    },
    claims_get_admin_setup_response : (state) => {
      return state.adminsetup_response
    },
    claims_get_classcodecheck_response: (state) => {
      return state.classcode_checker
    },
    claims_get_student_signup_response: (state) => {
      return state.studentReg
    },
    claims_get_report_bug_response: (state) => {
      return state.report
    }
  },
  actions: {
   actions_admin_checker({commit}){ 
     return new Promise((resolve) => {
      checkadminprocess().then((response) => {
        return resolve(commit(`mutate_check_admin_registration`, response.data))
      })
     })
   },
   actions_admin_store_setup({commit}, {object}) {
     return new Promise((resolve) => {
      adminprocess(object).then((response) => {
        return resolve(commit(`mutate_admin_store_setup`, response.data.message))
      })
     })
   },
   actions_classcode_checker_setup({commit}, {object}) {
     return new Promise(resolve => {
      classcodescannerprocess(object).then(response => {
        return resolve(commit(`mutate_check_classcode_reg`, response.data.message))
      })
     })
   },
   actions_student_signup_setup({commit}, {object}) {
     return new Promise(resolve => {
      registrationstudentprocess(object).then(response => {
        return resolve(commit(`mutate_student_signup`, response.data.message))
      })
     })
   },
   actions_bug_report_setup({commit}, {object}) {
    return new Promise(resolve => {
      reportabugprocess(object).then(response => {
        return resolve(commit(`mutate_bug_report`, response.data.message))
     })
    })
  }
  },
  modules: {
  }
})
