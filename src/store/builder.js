import http from './auth'
import api from './routeapi'
import constructor from './data'
import axios from 'axios'

const state = { 
    identifyAdmin(resolve) { 
        try {
            var restful = http.get(api.EntryPoint(`administrator`) + `/detect-admin-registration`)
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    storeAdmin(obj, resolve){
        try {
            var restful = http.post(api.EntryPoint(`administrator`) + `/admin-store-data`, constructor.datamanagement(obj))
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    checkClasscode(obj, resolve) {
        try {
            var restful = http.post(api.EntryPoint(`students`) + '/student-classcode', constructor.classcodechecker(obj));
            response.responseData(restful, resolve);
        } catch (error) {
            alert(error)
        }
    },
    studentRegister(obj, resolve) {
        try {          
            var restful = http.post(api.EntryPoint(`students`) + '/add-student', constructor.registrationstudent(obj));
            response.responseData(restful, resolve);
        } catch (error) {
            alert(alert)
        }
    },
    signinController(obj, resolve) { 
        try {
            var restful = http.post(api.EntryPoint(`signin`) + `/standard-login`, constructor.signindata(obj))
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    updateTokenController(email, token, resolve) {
        try {
            var restful = http.put(api.EntryPoint(`signin`) + `/update-token-admin` + constructor.updateToken(email, token))
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    scanTokenLoader(token, email, resolve) {
        try {
            var restful = http.get(api.EntryPoint(`signin`) + `/check-token` + constructor.scanToken(token, email))
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    }
}

const response = { 
    responseData(res, resolve) {
        return resolve(res)
    }
}

const request = { 
    async check_admin(){
        return await api.requestSetup.admin_data_check()
    },
    async adminrequest(obj){
        return await api.requestSetup.admin_store_data(obj)
    },
    async classcoderequest(obj) {
        return await api.requestSetup.classcode_student_scan(obj)
    },
    async studentRegister_request(obj) {
        return await api.requestSetup.student_registration_setup(obj);
    },
    async signin_request(obj) {
        return await api.requestSetup.signin_setup(obj);
    },
    async updatetoken_request(email, token) {
        return await api.requestSetup.updatetoken_setup(email, token)
    },
    async scantoken_request(token, email) {
        return await api.requestSetup.scantoken_setup(token, email)
    }
}

export default { 
    state, request
}