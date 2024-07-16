import React from 'react'
import Meetingcard from '../../../UI/Cards/meetingcard'
function Userdashboard() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Meetingcard meetingtype = "Make instant meet" color="red-500"/>
            <Meetingcard meetingtype = "Join Meet" color="green-500"/>
            <Meetingcard meetingtype = "Schedule Meeting for later" color="yellow-500"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Userdashboard