import initiateRequest from './builder'

export function checkadminprocess(){
    return initiateRequest.request.check_admin()
}