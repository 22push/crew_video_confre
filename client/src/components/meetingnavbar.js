import React, { useContext } from 'react'
import app_logo from './../assets/app_logo.jpg'
import { MyContext } from '../api/mycontext'
function Navmeeting() {
  const namecontext = useContext(MyContext);
  // console.log(namecontext);
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-wrap flex-col md:flex-row items-center">
          <li className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img alt="logo" className="w-20 h-20" src={app_logo} viewBox="0 0 24 24"></img>
            <span className="ml-3 text-xl">Discussion for sem 6 projects</span>
          </li>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <button className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 mr-10">00:00:00
            </button>
            
          </nav>
          <button className="inline-flex items-end bg-blue-300 border-1 py-1.5 px-3.5 rounded-3xl font-bold text-2xl mt-4 ml-10 md:mt-0 mr-10 " >{namecontext.name[0]}</button>
        </div>
      </header>
    </>
  )
}

export default Navmeeting