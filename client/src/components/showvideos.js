import React from 'react'
import sideimg from './../assets/rough_img.jpg'
function Showvideos() {
    return (
        <>
            <div className='flex flex-col w-4/6 ml-5'>
                <div className="flex flex-row justify-start ">
                    <img className="w-36 h-24 bg-red-400 m-1 rounded-lg " src={sideimg} alt='scd'/>
                    <img className="w-36 h-24 bg-red-400 m-1 rounded-lg " src={sideimg}  alt='scd'/>
                    <img className="w-36 h-24 bg-red-400 m-1 rounded-lg " src={sideimg} alt='scd'/>
                    <img className="w-36 h-24 bg-red-400 m-1 rounded-lg " src={sideimg} alt='scd'/>
                    <img className="w-36 h-24 bg-red-400 m-1 rounded-lg " src={sideimg} alt='scd'/>
                    {/* <div className="w-72 h-96 bg-red-400 m-2 rounded-lg">01</div> */}
                </div>
                <div className='bg-gray-400 h-80 m-2 rounded-lg'>
                    vedio
                </div>
                <div className='flex flex-row justify-center '>
                    <div className='flex flex-row bg-yellow-300 rounded-lg p-2 m-2'>
                        <h2 className='mr-3'>asc-dvd-ssv</h2>
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#6376b6" stroke-width="1.5"></path> <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#6376b6" stroke-width="1.5"></path> </g></svg>
                    </div>
                    <div className='flex flex-row rounded-lg ml-16'>
                        <button className='bg-red-500 m-1 w-12 h-12 rounded-lg'>1</button>
                        <button className='bg-gray-700 m-1 w-12 h-12 rounded-lg '><svg className="m-2" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                        <button className='bg-gray-700 m-1 w-12 h-12 rounded-lg'><svg width="32px" height="32px" className="m-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 13L16 10M16 10L13 7M16 10H8M12 16.5C16 16.5 19.5 16.1667 20 15.8333C20.5 15.5 21 12.6667 21 10C21 7.33333 20.5 4.5 20 4.16667C19.5 3.83333 16 3.5 12 3.5C8 3.5 4.5 3.83333 4 4.16667C3.5 4.5 3 7.33333 3 10C3 12.6667 3.5 15.5 4 15.8333C4.5 16.1667 8 16.5 12 16.5ZM12 16.5V20.5M12 20.5H16M12 20.5H8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                        <button className='bg-gray-700 m-1 w-12 h-12 rounded-lg'><svg width="32px" height="32px"  className="m-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg></button>
                        <button className='bg-gray-700 m-1 w-12 h-12 rounded-lg'></button>
                        <button className='bg-red-500 m-1 w-12 h-12 rounded-lg'>1</button>
                        <button className='bg-red-500 m-1 w-36 h-12 rounded-lg ml-11'>Leave Meet</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showvideos