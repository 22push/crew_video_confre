import EndIcon from "../../../Icons/leavemeetingicon";
import ChatIcon from "../../../Icons/chaticon";
import RaiseHandIcon from "../../../Icons/raisehandicon";
import RecordingIcon from "../../../Icons/recordingicon";
import ScreenShareIcon from "../../../Icons/screenshare";
import WebcamOffIcon from "../../../Icons/camoff";
import WebcamOnIcon from "../../../Icons/camon";
import MicOffIcon from "../../../Icons/micoff";
import MicOnIcon from "../../../Icons/micon";
import React, { useState } from 'react'
import {
    MeetingProvider,
    MeetingConsumer,
    useMeeting,
    useParticipant,
  } from "@videosdk.live/react-sdk";
function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    const { enableScreenShare, disableScreenShare, toggleScreenShare } = useMeeting();
    const [mic ,setmic] = useState("OFF");
    const [webcam,setwebcam] = useState("OFF");
    function setwebcamera (){
      toggleWebcam()
      if(webcam==="OFF"){
        setwebcam("ON");
      }
      else{
        setwebcam("OFF");
      }
    }
    function setmicstate(){
      toggleMic()
      if(mic==="OFF"){
        setmic("ON");
      }
      else{
        setmic("OFF");
      }
    }
    const handleToggleScreenShare = () => {
      toggleScreenShare();
    };
  return (
    <>
    <div className="flex flex-row justify-center fixed bottom-10 left-0 right-96 space-x-12 ">
        <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${webcam ? "bg-white" : "bg-red-650 text-white"}`} onClick={setwebcamera}>{webcam==="OFF"?<WebcamOffIcon fillcolor="#050A0E"/>:<WebcamOnIcon fillcolor="#050A0E"/>}</button>
        <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${mic ? "bg-white" : "bg-red-650 text-white"}`}  onClick={setmicstate}>{mic==="OFF"?<MicOffIcon fillcolor="#050A0E"/>:<MicOnIcon fillcolor="#050A0E"/>}</button>
        {/* <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${mic ? "bg-white" : "bg-red-650 text-white"}`}><ChatIcon fillcolor="#21130d"/></button> */}
        <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${mic ? "bg-white" : "bg-red-650 text-white"}`}><RaiseHandIcon  fillcolor="#21130d"/></button>
        <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${mic ? "bg-white" : "bg-red-650 text-white"}`}><RecordingIcon  fillcolor="#21130d"/></button>
        <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${mic ? "bg-white" : "bg-red-650 text-white"}`} onClick={handleToggleScreenShare}><ScreenShareIcon  fillcolor="#21130d"/></button>
        <button className={` rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${mic ? "bg-white" : "bg-red-650 text-white"}`}><EndIcon fillcolor="#21130d"/></button>
    </div>
    </>
  )
}

export default Controls