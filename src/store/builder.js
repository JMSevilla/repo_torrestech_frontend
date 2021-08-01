import request from "./auth"

const state = {
    getcontent(queryparams, resolve) {
        try {
            var res = request.get(`dynamicpage/get-by-title?title=${queryparams}`)
            response.getresponse(res, resolve)
        } catch (error) {
            alert(error)
        }
    }
}

const response ={
    getresponse(res, resolve){
        return resolve(res)
    }
}

const build = {
    async buildgetter(queryparams){
        return await this.contentbuild(queryparams)
    },
    async contentbuild(queryparams){
        return new Promise((resolve) => {
            return state.getcontent(queryparams, resolve)
        })
    }
}

export default build