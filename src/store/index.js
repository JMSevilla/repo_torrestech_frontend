import {checkadminprocess, adminprocess, classcodescannerprocess, registrationstudentprocess, reportabugprocess, signinprocess, updatetokenprocess,
  scantokenprocess, addtrainingprocess, addemployeeprocess, setupsessionprocess} from './request'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeSettings: {
      primaryroutingName : "",
      secondaryroutingName: "",
      routePathPrimary : "",
      routePathSecondary: ""
    },
    detector : "",
    adminsetup_response : "",
    classcode_checker: "",
    studentReg: "",
    report: "",
      signinresponse : {
        responseArray: []
      },
      signinArray: [],
      tokenresponse: '',
      tokenArray: [],
      scantokenresponse: '',
      TrainingResponse: '',
      employeeReg: "",
      session_setting: {
        session_set : false,
        session_get : false
      }
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
    },
    mutate_signin: (state, data) => {
      return state.signinresponse.responseArray = data
    },
    mutate_token_updater: (state, data) => {
      return state.tokenresponse = data
    },
    mutate_scan_token: (state, data) => {
      return state.scantokenresponse = data
    },
    mutate_training: (state, data) => {
      return state.TrainingResponse = data
    },
    mutate_employeeadd: (state, data) => {
      return state.employeeReg = data
    },
    mutate_session_setup : (state, data) => {
      return state.session_setting.session_set = data
    }
  },
  getters: {
    claims_routename_dynamic: (state) => {
      return state.routeSettings.primaryroutingName
    },
    claims_secondaryroutename_dynamic: (state) => {
      return state.routeSettings.secondaryroutingName
    },
    claims_primaryroutepath_dynamic: (state) => {
      return state.routeSettings.routePathPrimary
    },
    claims_secondaryroutepath_dynamic: (state) => {
      return state.routeSettings.routePathSecondary
    },
    claims_get_session_BE_response : (state) => {
      return state.session_setting.session_set
    },
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
    },
    claims_get_response_signin_single: (state) => {
      return state.signinresponse.responseArray
    },
    claims_get_response_token_update: (state) => {
      return state.tokenresponse
    },
    claims_scan_token: (state) => {
      return state.scantokenresponse
    },
    claims_get_training_response: (state) => {
      return state.TrainingResponse
    },
    claims_add_employee_response: (state) => {
      return state.employeeReg
    }
  },
  actions: {
    async actions_session_setup({commit}, {email}) {
      return await new Promise((resolve) => {
        setupsessionprocess(email)
        .then((data) => {
          return resolve(commit(`mutate_session_setup`, data.data))
        })
      })
    },
    actions_training_add({commit}, {object}){
      return new Promise((resolve) => {
        addtrainingprocess(object).then(({ data }) => {
          console.log(data)
          return resolve(commit(`mutate_training`, data))
        })
      })
    },
    actions_scan_token({commit}, {token, email}) {
      return new Promise((resolve) => {
        scantokenprocess(token, email).then(response => {
          return resolve(commit(`mutate_scan_token`, response.data))
        })
      })
    },
   actions_token_update({commit}, {email, token, decision}) {
    return new Promise((resolve) => {
      updatetokenprocess(email, token, decision).then(response => {
        return resolve(commit(`mutate_token_updater`, response.data))
      })
    })
   },
   actions_user_signin({commit}, {object}) { 
    return new Promise((resolve) => {
      signinprocess(object).then(response => {
        return resolve(commit(`mutate_signin`, response.data))
      })
    })
   },
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
  },
  actions_insert_employee_setup({commit}, {object}) {
    return new Promise(resolve => {
      addemployeeprocess(object).then(response => {
        return resolve(commit(`mutate_employeeadd`, response.data.message))
     })
    })
  }
  },
  modules: {
  }
})
