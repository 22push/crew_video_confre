import EndIcon from "../../../Icons/leavemeetingicon";
import ChatIcon from "../../../Icons/chaticon";
import RaiseHandIcon from "../../../Icons/raisehandicon";
import RecordingIcon from "../../../Icons/recordingicon";
import ScreenShareIcon from "../../../Icons/screenshare";
import WebcamOffIcon from "../../../Icons/camoff";
import WebcamOnIcon from "../../../Icons/camon";
import MicOffIcon from "../../../Icons/micoff";
import MicOnIcon from "../../../Icons/micon";
import React from 'react'
import {
    MeetingProvider,
    MeetingConsumer,
    useMeeting,
    useParticipant,
  } from "@videosdk.live/react-sdk";
function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <>
    <div className="flex flex-row justify-center fixed top-96 left-0 right-0 ">
        <button className="basis-1/12" onClick={()=>toggleWebcam()}>{1?<WebcamOffIcon/>:<WebcamOnIcon/>}</button>
        <button className="basis-1/12" onClick={()=>toggleMic()}>{1?<MicOffIcon/>:<MicOnIcon/>}</button>
        <button className="basis-1/12"><ChatIcon fillcolor="#21130d"/></button>
        <button className="basis-1/12"><RaiseHandIcon  fillcolor="#21130d"/></button>
        <button className="basis-1/12"><RecordingIcon  fillcolor="#21130d"/></button>
        <button className="basis-1/12"><ScreenShareIcon  fillcolor="#21130d"/></button>
        <button className="basis-1/12"><EndIcon fillcolor="#21130d"/></button>
    </div>
    </>
  )
}

export default Controls