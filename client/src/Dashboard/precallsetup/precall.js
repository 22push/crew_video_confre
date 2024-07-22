import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLocalStream } from '../../api/webconnection/webrtc';
import MicOffIcon from "../../Icons/micoff";
import MicOnIcon from "../../Icons/micon";
import WebcamOffIcon from "../../Icons/camoff";
import WebcamOnIcon from "../../Icons/camon";
import { useNavigate } from 'react-router-dom';
import store from './../../store/store'
import * as meetingactions from './../../store/actions/meetingaction'
const JoiningScreen = props => {
    const videoRef = useRef();
    const [micon, setmicon] = useState(false);
    const [webcamon, setwebcamon] = useState(false);
    const { localstream, setstream } = props;
    const navigate = useNavigate();
    useEffect(() => {
        getLocalStream();
    }, [webcamon])
    useEffect(() => {
        // console.log(localstream)
        if (localstream && webcamon) {
            const localVideo = videoRef.current;
            localVideo.srcObject = localstream;

            localVideo.onloadedmetadata = () => {
                localVideo.play();
            };
        }
    }, [localstream, webcamon]);
    function toggleVideo() {
        if (webcamon) {
            setwebcamon(false);
            videoRef.current.srcObject = null;
        }
        else {
            setwebcamon(true);
        }
    }
    function togglemic() {
        if (micon) {
            setmicon(false);
        }
        else {
            setmicon(true);
        }
    }
    const ButtonWithTooltip = ({ onClick, onState, OnIcon, OffIcon }) => {
        const btnRef = useRef();
        return (
            <>
                <div>
                    <button
                        ref={btnRef}
                        onClick={onClick}
                        className={`rounded-full min-w-auto w-12 h-12 flex items-center justify-center 
                ${onState ? "bg-white" : "bg-red-650 text-white"}`}
                    >
                        {onState ? (
                            <OnIcon fillcolor={onState ? "#050A0E" : "#fff"} />
                        ) : (
                            <OffIcon fillcolor={onState ? "#050A0E" : "#fff"} />
                        )}
                    </button>
                </div>
            </>
        );
    };
    function gotomeeting(){
        navigate("/meeting")
        store.dispatch(meetingactions.addparticipant("Pushkar"))
      }
    return (
        <div className="fixed inset-0">
            <div className="overflow-y-auto flex flex-col flex-1 h-screen bg-gray-800">
                <div className="flex flex-1 flex-col md:flex-row items-center justify-center md:m-[72px] m-16">
                    <div className="container grid  md:grid-flow-col grid-flow-row ">
                        <div className="grid grid-cols-12">
                            <div className="md:col-span-12 2xl:col-span-7 col-span-12">
                                <div className="flex items-center justify-center p-1.5 sm:p-4 lg:p-6">
                                    <div className="relative w-full md:pl-4 sm:pl-10 pl-5  md:pr-4 sm:pr-10 pr-5">
                                        <div className="w-full relative" style={{ height: "65vh" }}>
                                            <video
                                                autoPlay
                                                playsInline
                                                muted
                                                ref={videoRef}
                                                controls={false}
                                                style={{
                                                    backgroundColor: "#1c1c1c",
                                                }}
                                                className={
                                                    "rounded-[10px] h-full w-full object-cover flex items-center justify-center flip"
                                                }
                                            />
                                            <div className="absolute xl:bottom-6 bottom-4 left-0 right-0">
                                                <div className="container grid grid-flow-col space-x-4 items-center justify-center md:-m-2">
                                                    {1 ? (
                                                        <ButtonWithTooltip
                                                            onClick={togglemic}
                                                            onState={micon}
                                                            mic={true}
                                                            OnIcon={MicOnIcon}
                                                            OffIcon={MicOffIcon}
                                                        />
                                                        // <div>toggle</div>
                                                    ) : <div>on your mic</div>}

                                                    {1 ? (
                                                        <ButtonWithTooltip
                                                            onClick={toggleVideo}
                                                            onState={webcamon}
                                                            mic={false}
                                                            OnIcon={WebcamOnIcon}
                                                            OffIcon={WebcamOffIcon}
                                                        />
                                                        // <div>toggle</div>
                                                    ) : (
                                                        <div>on your mic</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 2xl:col-span-5 col-span-12 md:relative">
                                            <div className="flex flex-1 flex-col items-center justify-center xl:m-16 lg:m-6 md:mt-9 lg:mt-14 xl:mt-20 mt-3 md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0">
                                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-2 mr-10 " onClick={gotomeeting} >Start new meeting</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = ({ user }) => ({
    ...user
});
export default connect(mapStateToProps)(JoiningScreen);