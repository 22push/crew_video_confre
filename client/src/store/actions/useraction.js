export const SET_USERNAME =  'SET_USERNAME';
export const SET_ROOMUSERS = 'SET_ROOMUSERS';
export const SET_ROOM_ID = 'SET_ROOM_ID';
export const CALL_SET_LOCAL_STREAM = 'CALL_SET_LOCAL_STREAM';
export const CALL_SET_CALL_STATE = 'CALL_SET_CALL_STATE';
export const CALL_SET_REMOTE_STREAM = 'CALL_SET_REMOTE_STREAM';
export const setUsername = (username)=>{
    return {
        type:SET_USERNAME,
        username
    }
}
export const setactiveUser = (activeuser )=>{
    console.log(activeuser);
    return {
        type:SET_ROOMUSERS,
        activeuser
    }
}
export const setmeetingid = (meetingid)=>{
    console.log(meetingid);
    return {
        type:SET_ROOM_ID,
        meetingid
    }
}
export const setLocalsteam = (localstream) =>{
    return {
        type:CALL_SET_LOCAL_STREAM,
        localstream
    }
}
export const setcallstate = (callstate) =>{
    return {
        type:CALL_SET_CALL_STATE,
        callstate
    }
}
export const setremotestream = (remotestream)=>{
    return {
        type:CALL_SET_REMOTE_STREAM,
        remotestream
    }
}