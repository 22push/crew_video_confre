// import "./App.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { useNavigate } from 'react-router-dom';
import { authToken } from "./roomapi";
import ReactPlayer from "react-player";
import Controls from "./components/Controls";
import Participantinfo from "./components/participantinfo";
const PresenterView = ({ presenterId }) => {
  const { screenShareAudioStream, isLocal, screenShareStream, screenShareOn } = useParticipant(presenterId);
  const audioPlayer = useRef();

  // Playing the screen share audio stream
  useEffect(() => {
    if (
      !isLocal &&
      audioPlayer.current &&
      screenShareOn &&
      screenShareAudioStream
    ) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareAudioStream.track);

      audioPlayer.current.srcObject = mediaStream;
      audioPlayer.current.play().catch((err) => {
        if (
          err.message ===
          "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
        ) {
          console.error("audio" + err.message);
        }
      });
    } else {
      audioPlayer.current.srcObject = null;
    }
  }, [screenShareAudioStream, screenShareOn, isLocal]);
  //Creating a media stream from the screen share stream
  const mediaStream = useMemo(() => {
    if (screenShareOn && screenShareStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);

  return (
    <>
      {/* // playing the media stream in the ReactPlayer */}
      <ReactPlayer
        //
        playsinline // extremely crucial prop
        playIcon={<></>}
        //
        pip={false}
        light={false}
        controls={false}
        muted={true}
        playing={true}
        //
        url={mediaStream} // passing mediastream here
        //
        height={"100%"}
        width={"100%"}
        onError={(err) => {
          console.log(err, "presenter video error");
        }}
      />
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
    </>
  );
};
function ParticipantView(props) {
  const micRef = useRef(null);
  const { displayName, webcamStream, micStream, webcamOn, micOn, isLocal } =
    useParticipant(props.participantId, {
      onStreamEnabled,
      onStreamDisabled
    });
  function onStreamEnabled(stream) {
    if (stream.kind === 'share') {
      console.log("Share Stream On: onStreamEnabled", stream);
    }
  }
  function onStreamDisabled(stream) {
    if (stream.kind === 'share') {
      console.log("Share Stream Off: onStreamDisabled", stream);
    }
  }
  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div key={props.participantId}>
      {/* <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p> */}
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn ?
        <div className="rounded-lg">
          <ReactPlayer
            playsinline
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            height={"250px"}
            width={"250px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          /> </div>
        : <div className="bg-gray-800 h-16 w-16 text-center font-extrabold text-3xl text-zinc-50 rounded-lg ">P</div>
      }
    </div>
  );
}
function MeetingView(props) {

  const [joined, setJoined] = useState("JOINED");
  const { presenterId } = useMeeting();
  const { join } = useMeeting();
  function onPresenterChanged(presenterId) {
    if (presenterId) {
      console.log(presenterId, "started screen share");
    } else {
      console.log("someone stopped screen share");
    }
  }
  useEffect(() => {
    join();
  }, []);
  const { participants } = useMeeting({
    onPresenterChanged,
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <>
      <div className="fixed inset-0">
      <div className="flex flex-row bg-slate-800 h-full">
        <div className="container w-3/4 content-start">
          {/* <h3>Meeting Id: {props.meetingId}</h3> */}
          {presenterId && <PresenterView presenterId={presenterId} />}
          {joined && joined === "JOINED" ? (
            <div className="rounded-lg grid grid-cols-3 gap-3 content-start">
              {[...participants.keys()].map((participantId) => (
                <ParticipantView
                  participantId={participantId}
                  key={participantId}
                />
              ))}
              <Controls />
            </div>

          ) : (
            <p>Joining the meeting...</p>
          )}
        </div>
        <div className="bg-white h-full">.
        </div>
        <div className="flex flex-col w-1/4 h-full">
          <div>
            <h2 className="text-center text-2xl text-neutral-100 m-4">Participant</h2>
            <Participantinfo name="Pushkar" />
            <Participantinfo name="Sagar" />
          </div>
          {/* <h2>Chat</h2> */}
        </div>
      </div>
      </div>
    </>
  );
}

function App(props) {
  const meetingId = props.meetingid;
  const navigate = useNavigate()
  const onMeetingLeave = () => {
    meetingId = null;
    navigate('/')
  };

  return authToken && props.meetingid ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => (
          <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
        )}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <div>dsfvbfg</div>
  );
}

export default App;