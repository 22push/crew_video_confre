import React from 'react'
import img from './../../../assets/app_logo.jpg'
function Participantinfo({ name }) {
    return (
        <>
            <div class="flex items-center m-2">
                <img src={img} className='h-8 w-8 rounded-full mr-5' />
                <div>
                    <strong className='text-xl  text-stone-50'>{name}</strong>
                </div>
            </div>
        </>
    )
}

export default Participantinfo