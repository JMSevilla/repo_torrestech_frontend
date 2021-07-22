// import http from "./auth"
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    responseDataAPI: []
  },
  mutations: {
    MUTATE_GET_USERS(state, data) {
        state.responseDataAPI = data
    }
  },
  getters: {
    getusersdata: (state) => {
      return state.responseDataAPI
    }
  },
  actions: {
   ACTIONS_GET_USERS({commit}){
     return new Promise((resolve, reject) => {
       axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
         resolve(commit("MUTATE_GET_USERS", response.data))
       }, error => {
         reject(error)
       })
     })
    }
  },
  modules: {
  }
})
