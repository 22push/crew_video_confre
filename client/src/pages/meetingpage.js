import React, { useContext } from 'react'
import Navmeeting from '../components/meetingnavbar'
import Showvideos from '../components/showvideos'
import { MyContext } from '../api/mycontext'
import { Link } from "react-router-dom";
function MeetingPage() {
  const namecontext = useContext(MyContext);
  console.log(namecontext.name);
  // function checkuser(){
  //   if(namecontext.name ===""){
  //     <Link to = "/vbff"/>
  //   }
  // }
  // checkuser();
  return (
    <>
    <Navmeeting/>
    <Showvideos/>
    </>
  )
}

export default MeetingPage