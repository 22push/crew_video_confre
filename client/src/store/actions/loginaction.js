export const SETLOGIN_STATE =  'SETLOGIN_STATE';
export const SET_ISLOGIN = 'SET_ISLOGIN';
export const SET_DASHBOARD = 'SET_DASHBOARD';
export const setloginstate =  (loginstate)=>{
    return {
        type: SETLOGIN_STATE,
        loginstate
    }
}
export const islogin = (islogin) =>{
    return {
        type : SET_ISLOGIN,
        islogin
    }
}
export const setdashboardstate = (dashboardstate)=>{
    return {
        type : SET_DASHBOARD,
        dashboardstate
    }
}