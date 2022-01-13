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
export function signinprocess(obj) {
    return initiateRequest.request.signin_request(obj)
}

export function updatetokenprocess(email, token, decision) {
    return initiateRequest.request.updatetoken_request(email, token, decision)
}

export function scantokenprocess(token, email){
    return initiateRequest.request.scantoken_request(token, email)
}

export function addtrainingprocess(obj){
    return initiateRequest.request.addTraining_request(obj)
}

export function addemployeeprocess(obj){
    return initiateRequest.request.addEmployee_request(obj)
}
export function setupsessionprocess(email){
    return initiateRequest.request.session_request(email)
}

export function getfooterprocess(){
    return initiateRequest.request.get_footer_request();
}

export function getnavbarprocess(){
    return initiateRequest.request.get_Navbar_request();
}

export function postaboutprocess(obj){
    return initiateRequest.request.postAbout_request(obj)
}