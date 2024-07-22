import * as meetingaction from '../actions/meetingaction';
const inistate = {
    jointype:"create",
    meetingtoken:"",
    meetingid:"",
    webcam:"OFF",
    mic:"OFF",
    participants:[],
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
        case meetingaction.SET_WEBCAM:
            return {
                ...state,
                webcam:action.webcam
            }
        case meetingaction.SET_MIC:
            return {
                ...state,
                mic:action.mic
            }
        case meetingaction.ADD_PARTICIPANT:
            return {
                ...state,
                participants:[...state.participants, action.participant],
            }
            default:
                return state;
    }
};

export default meetingreducer;