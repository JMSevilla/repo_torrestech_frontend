import http from './auth'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    responseData: '' //string / variable
  },
  mutations: {
    MUTATE_GET_USERS_DATA: (state, data) => {
      state.responseData = data
    }
  },
  getters: {
    get_final_users_data: (state) => {
      return state.responseData
    }
  },
  actions: {
    ACTIONS_FETCH_USERS_DATA({commit}, {obj}){
      try {
        var data = new FormData();
        data.append("firstname", obj.firstname)
        data.append("lastname", obj.lastname)
        return new Promise((resolve,reject) => {
          http.post(`/api/testing-adding/adding`, data).then(response =>{
            resolve(response.data.message)
            commit(`MUTATE_GET_USERS_DATA`, response.data.message) //response.data.message = "success"
          }, error => {
            reject(error)
          })
        })
      } catch (error) {
        alert("error in inserting data" + error)
      }
    }
  },
  modules: {
  }
})
