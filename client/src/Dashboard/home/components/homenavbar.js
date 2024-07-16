import React from 'react'
import app_logo from './../../../assets/app_logo.jpg'
function Homenavbar() {
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex title-font font-medium items-center text-gray-900 m-4 ">
          <img alt="logo" className="w-10 h-10" src={app_logo} viewBox="0 0 24 24"></img>
          <span className="ml-3 text-3xl font-serif ">Crew Meet</span>
        </div>
        <div className=' flex mt-4 ml-auto'>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-2 mr-10 ">Start new meeting</button>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-2 mr-10 ">Login</button>
        </div>
      </div>
    </>
  )
}

export default Homenavbar