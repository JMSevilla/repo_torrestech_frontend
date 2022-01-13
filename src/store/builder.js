import http from './auth'
import api from './routeapi'
import constructor from './data'
import axios from 'axios'

const state = { 
    identifyAdmin(resolve) { 
        try {
            var restful = http.get(api.EntryPoint(`v1/resources/administrator`) + `/detect-admin-registration`)
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    storeAdmin(obj, resolve){
        try {
            var restful = http.post(api.EntryPoint(`v1/resources/administrator`) + `/admin-store-data`, constructor.datamanagement(obj))
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
    reportBug(obj, resolve) {
        try {
            var restful = http.post(api.EntryPoint(`mr_report`) + '/report-a-bug', constructor.bugreport(obj));
            response.responseData(restful, resolve);
        } catch(error) {
            alert(error);
        }
    },
    signinController(obj, resolve) { 
        try {
            var restful = http.post(api.EntryPoint(`v1/resources/signin`) + `/standard-login`, constructor.signindata(obj))
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    updateTokenController(email, token, decision, resolve) {
        try {
            if(decision === true){
                var restful = http.put(api.EntryPoint(`v1/resources/signin`) + `/update-token-admin` + constructor.updateToken(email, token))
                response.responseData(restful, resolve)
            }else{
                const rest = http.put(api.EntryPoint(`v1/resources/signin`) + `/update-destroy-token` + constructor.destroyToken(email))
                response.responseData(rest, resolve)
            }
        } catch (error) {
            alert(error)
        }
    },
    scanTokenLoader(token, email, resolve) {
        try {
            var restful = http.get(api.EntryPoint(`v1/resources/signin`) + `/check-token` + constructor.scanToken(token, email))
            response.responseData(restful, resolve)
        } catch (error) {
            alert(error)
        }
    },
    TrainingAdding(obj, resolve){
        try {
            const rest = http.post(api.EntryPoint(`v1/resources/training`) + `/add-training`, constructor.addTraining(obj))
            response.responseData(rest, resolve)
        } catch (error) {
            alert("Add training error" + error)
        }
    },
    InsertEmployee(obj, resolve){
        try {
            const rest = http.post(api.EntryPoint(`v2/employee`) + `/add-employee`, constructor.addemployee(obj))
            response.responseData(rest, resolve)
        } catch (error) {
            alert("Add employee error" + error)
        }
    },
    accessSession(email, resolve){
        try {
            const request = http.put(api.EntryPoint(`v1/resources/signin`) + `/access-session` + constructor.setSession(email))
            response.responseData(request, resolve)
        } catch (error) {
            alert(error)
        }
    },
    GetFooterContent(resolve) {
        try {
            const request = http.get(api.EntryPoint(`footer-get-content`) + `/get-content`);
            response.responseData(request, resolve)
        } catch (error) {
            alert(error)
        }
    },
    GetNavbarContent(resolve) {
        try {
            const request = http.get(api.EntryPoint(`v3/navbar-dynamic`) + `/get-content`);
            response.responseData(request, resolve)
        } catch (error) {
            alert (error)
        }
    },
    addAboutUs(object, resolve) {
        try {
            const request = http.post(api.EntryPoint(`our-services`) + `/adding-about-us`, constructor.addaboutus(object))
            response.responseData(request, resolve)
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
    async postAbout_request(obj){
        return await api.requestSetup.postAbout(obj)
    },
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
    async reportbug_request(obj) {
        return await api.requestSetup.report_bug_setup(obj);
    },
    async signin_request(obj) {
        return await api.requestSetup.signin_setup(obj);
    },
    async updatetoken_request(email, token, decision) {
        return await api.requestSetup.updatetoken_setup(email, token, decision)
    },
    async scantoken_request(token, email) {
        return await api.requestSetup.scantoken_setup(token, email)
    },
    async addTraining_request(obj){
        return await api.requestSetup.addTraining_setup(obj)
    },
    async addEmployee_request(obj){
        return await api.requestSetup.addEmployee_setup(obj)
    },
    async session_request(email){
        return await api.requestSetup.session_setup(email)
    },
    async get_footer_request(){ 
        return await api.requestSetup.getContentFooter();
    },
    async get_Navbar_request(){
        return await api.requestSetup.getContentNavbar();
    }
}

export default { 
    state, request
}