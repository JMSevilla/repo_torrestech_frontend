import initiateRequest from './builder'

export function checkadminprocess(){
    return initiateRequest.request.check_admin()
}

export function adminprocess(obj){
    return initiateRequest.request.adminrequest(obj)
}

export function classcodescannerprocess(obj) {
    return initiateRequest.request.classcoderequest(obj);
}

export function registrationstudentprocess(obj) {
    return initiateRequest.request.studentRegister_request(obj);
}

export function reportabugprocess(obj) {
    return initiateRequest.request.reportbug_request(obj);
}