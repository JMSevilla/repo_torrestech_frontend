import build from "./builder"
import http from "./auth"
/* 
michael navidad - code
--date 
-- description
*/
export function getalldata1() {
    try {
        return http.get(`/users`)
    } catch (error) {
        alert("error in fetch" + error)
    }
}
/*
closing code from michael
--date
--description
*/


export function getalldata(){
    return build.request_fetch()
}