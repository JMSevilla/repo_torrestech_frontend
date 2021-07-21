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
  actions: {
   ACTIONS_GET_USERS({commit}, {self}){
     axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      commit("MUTATE_GET_USERS", response.data)
      self.getallusers()
    }).catch((e) => {
      alert("errorr in getting data" + e)
    })
    }
  },
  modules: {
  }
})
