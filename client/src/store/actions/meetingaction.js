export const SET_JOINTHROUGH =  'SET_JOINTHROUGH';
export const SET_MEETINGTOKEN = 'SET_MEETINGTOKEN';
export const SET_MEETINGID = 'SET_MEETINGID';
export const setjointhrough =  (jointype)=>{
    return {
        type: SET_JOINTHROUGH,
        jointype
    }
}
export const setmeetingtoken = (meetingtoken)=>{
    return {
        type: SET_MEETINGTOKEN,
        meetingtoken
    }
}
export const setmeetingid = (meetingid)=>{
    return {
        type: SET_MEETINGID,
        meetingid
    }
}