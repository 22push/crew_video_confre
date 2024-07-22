export const SET_JOINTHROUGH =  'SET_JOINTHROUGH';
export const SET_MEETINGTOKEN = 'SET_MEETINGTOKEN';
export const SET_MEETINGID = 'SET_MEETINGID';
export const SET_WEBCAM = 'SET_WEBCAM';
export const SET_MIC = 'SET_MIC';
export const SET_RECORDING = 'SET_RECORDING';
export const SET_SCREENSHARE = 'SET_WEBCAM';
export const SET_CHAT = 'SET_CHAT';
export const ADD_PARTICIPANT  = 'ADD_PARTICIPANT';
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
export const setwebcam = (webcam)=>{
    return {
        type: SET_WEBCAM,
        webcam
    }
}
export const setmic = (mic)=>{
    return {
        type: SET_MIC,
        mic
    }
}
export const addparticipant = (participant)=>{
    return {
        type: ADD_PARTICIPANT,
        participant
    }
}