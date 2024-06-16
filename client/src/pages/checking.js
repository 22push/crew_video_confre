import React ,{useRef,useEffect}from 'react'
import app_logo from './../assets/app_logo.jpg'
function CheckingPage() {
    const videoRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing the camera: ', err);
      }
    };

    getCameraStream();

    // Clean up the stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, []);
    return (
        <>
            <div className="flex flex-row ">
                <div className="flex title-font font-medium items-center text-gray-900 m-4 ">
                    <img alt="logo" className="w-10 h-10" src={app_logo} viewBox="0 0 24 24"></img>
                    <span className="ml-3 text-3xl font-serif ">Crew Meet</span>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='w-8/12 h-full'>
                    {/* <div className='bg-black h-96 w-400px m-4'></div> */}
                    <video ref={videoRef} className='bg-black h-96 w-400px m-4' autoPlay playsInline width="800" height="600"></video>
                </div>
                <div className='4/12 flex flex-col justify-center ml-20'>
                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your name</label>
                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-2 ml-1 ">Join</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckingPage