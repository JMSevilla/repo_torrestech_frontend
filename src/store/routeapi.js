import statemanagement from './builder'
/**
  API Logical Routing
 Code provided by : JM
 */
const Routes = { 
    baseAPI : '/api'
}

const EntryPoint = (apival) => {
    return Routes.baseAPI + `/` + apival;
}

const requestSetup = { 
    async admin_data_check() { 
        return await new Promise((resolve) => {
            return statemanagement.state.identifyAdmin(resolve)
        })
    },
    async admin_store_data(obj){
        return await new Promise((resolve) => {
            return statemanagement.state.storeAdmin(obj, resolve)
        })
    },
    async classcode_student_scan(obj) {
        return await new Promise(resolve => {
            return statemanagement.state.checkClasscode(obj, resolve)
        })
    },
    async student_registration_setup(obj) {
        return await new Promise(resolve => {
            return statemanagement.state.studentRegister(obj, resolve);
        });
    },
    async signin_setup(obj) {
        return await new Promise(resolve => {
            return statemanagement.state.signinController(obj, resolve);
        })
    }
}

export default { 
    EntryPoint,
    requestSetup
}