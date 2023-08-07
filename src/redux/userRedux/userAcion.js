export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT_SUCCESS = "LOGOUT"

export const loginStart = ()=> ({type:LOGIN_START})
export const loginSuccess = (data)=> ({type:LOGIN_SUCCESS,payload:data})
export const loginFailure = ()=> ({type:LOGIN_FAILURE})
export const logoutSuccess = ()=>({type:LOGOUT_SUCCESS})