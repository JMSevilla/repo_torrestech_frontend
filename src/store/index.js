import {checkadminprocess} from './request'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detector : ""
  },
  mutations: {
    mutate_check_admin_registration:(state, data) => {
      return state.detector = data
    }
  },
  getters: {
    claims_get_admin : (state) => {
      return state.detector
    }
  },
  actions: {
   actions_admin_checker({commit}){ 
     return new Promise((resolve) => {
      checkadminprocess().then((response) => {
        return resolve(commit(`mutate_check_admin_registration`, response.data))
      })
     })
   }
  },
  modules: {
  }
})
