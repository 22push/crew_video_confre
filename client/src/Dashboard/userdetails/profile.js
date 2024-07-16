import React from 'react'
import ProfileNav from './components/profilenav'
import {useSelector} from 'react-redux'
import Userdashboard from './components/userdashboard';
function   Profile() {
  const bodystate = useSelector((state) => state.login.dashboardstate);
  return (
    <>
    <ProfileNav/>
    {bodystate === "Dashboard"?<Userdashboard/>:bodystate === "New Meeting"?<h3>New Meeting</h3>:bodystate === "Past Meetings"?<h3>Past Meetings</h3>:bodystate === "Recordings"?<h3>Recordings</h3>:""}
    </>
  )
}

export default Profile