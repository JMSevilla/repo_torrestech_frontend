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
    }
}

export default { 
    EntryPoint,
    requestSetup
}