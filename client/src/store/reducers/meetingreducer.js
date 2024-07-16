import * as meetingaction from '../actions/meetingaction';
const inistate = {
    jointype:"create",
    meetingtoken:"",
    meetingid:"",
};

const meetingreducer = (state = inistate,action) =>{
    switch(action.type){
        case meetingaction.SET_JOINTHROUGH:
            return {
                ...state,
                jointype:action.jointype,
            }
        case meetingaction.SET_MEETINGTOKEN:
            return {
                ...state,
                meetingtoken:action.meetingtoken
            }
        case meetingaction.SET_MEETINGID:
            return {
                ...state,
                meetingid:action.meetingid
            }
            default:
                return state;
    }
};

export default meetingreducer;