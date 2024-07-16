import * as useraction from '../actions/useraction';

const inistate = {
    username :'',
    activeuser:[],
    meetingid:"",
    localstream:null,
    callstate:false,
    remotestream:null,
};
const userreducer = (state = inistate ,action) =>{
    switch(action.type){
        case useraction.SET_USERNAME:
            return {
                ...state,
                username:action.username,
            }
        case useraction.SET_ROOMUSERS:
            return{
                ...state,
                activeuser:action.activeuser,
            }
        case useraction.SET_ROOM_ID:
            return {
                ...state,
                meetingid:action.meetingid
            }
        case useraction.CALL_SET_LOCAL_STREAM:
            return{
                ...state,
                localstream:action.localstream
            }
        case useraction.CALL_SET_CALL_STATE:
            return {
                ...state,
                callstate:action.callstate
            }
        case useraction.CALL_SET_REMOTE_STREAM:
            return {
                ...state,
                callstate:action.remotestream
            }
            default:
                return state;
    }
};
export default userreducer;