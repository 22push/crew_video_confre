import * as useraction from '../actions/loginaction';

const inistate = {
    loginstate : "LOGIN",
    islogin:false,
    dashboardstate:"Dashboard"
};

const loginreducer = (state = inistate ,action) =>{
    switch(action.type){
        case useraction.SETLOGIN_STATE:
            return {
                ...state,
                loginstate:action.loginstate,
            }
        case useraction.SET_ISLOGIN:
            return {
                ...state,
                islogin : action.islogin
            }
        case useraction.SET_DASHBOARD:
            return {
                ...state,
                dashboardstate:action.dashboardstate
            }
            default:
                return state;
    }
};
export default loginreducer;