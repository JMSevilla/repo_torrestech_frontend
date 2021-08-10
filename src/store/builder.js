import http from './auth'
import api from './routeapi'
import constructor from './data'

const state = { 
    identifyAdmin(resolve) { 
        try {
            var restful = http.get(api.EntryPoint(`administrator`) + `/detect-admin-registration`)
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
    }
}

export default { 
    state, request
}