import React, { useContext,useRef,useState } from 'react'
import Homenavbar from './components/homenavbar'
import mainimg1 from './../../assets/maincover1.jpg'
import { v4 as uuidv4 } from 'uuid';
import store from '../../store/store';
import * as useractions from './../../store/actions/useraction'
import * as meetingaction from './../../store/actions/meetingaction'
import { useNavigate } from 'react-router-dom';
import { authToken, createMeeting } from './../meetingroom/roomapi'
function Homepage() {
  const navigate = useNavigate();
  const meetingidref = useRef();
  // const [meetingId, setMeetingId] = useState(null);
  const [meetingId, setMeetingId] = useState(null);
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id === null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
    store.dispatch(meetingaction.setmeetingid(meetingId));
    console.log(meetingId);
    navigate(`/joining?meetingid=${meetingId}`)
  };
  const onMeetingLeave = () => {
    setMeetingId(null);
  };
  function setmeetingid(){
    store.dispatch(meetingaction.setmeetingid(meetingidref.current.value));
    setMeetingId(meetingidref.current.value)
    navigate(`/joining?meetingid=${meetingidref.current.value}`)
  }
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <>
      <Homenavbar />
      <div className='flex flex-row relative '>
        <div className='w-5/12 flex flex-col justify-start'>
          <p className='text-center text-4xl mt-12 font-mono '>Unite your team <br></br>with our seamless video conferencing and instant chat platform.</p>
          <button type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-6 mr-24 ml-24 mt-10" onClick={onClick}>New Meeting</button>
          <form className="max-w-sm mx-auto">
            <div className=" relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </div>
              <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter meeting code" required ref={meetingidref}/>
            </div>
          </form>
          <p className='text-center text-xl mt-3 font-mono text-blue-500' onClick={setmeetingid}>Join</p>
        </div>
        <div className='w-7/12 '>
          <img src={mainimg1} alt="coverimg" />
        </div>
      </div>
    </>
  )
}

export default Homepage