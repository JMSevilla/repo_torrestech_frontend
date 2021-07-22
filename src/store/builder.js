import http from "./auth"

const state = { 
    fetchAll(){
        try {
            var result = http.get(`/users`)
            return response.getresponse(result)
        } catch (error) {
            alert("error in fetch" + error)
        }
    }
}

const response = {
    getresponse(data){
        return data
    }
}

const request = {
    async request_fetch(){
        return await state.fetchAll()
    }
}

export default request