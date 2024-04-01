import React from 'react'
import { Link } from 'react-router-dom'
import DoctorSpeackHome from './DoctorSpeackHome'

function DoctorSpeak() {
    return (
        <div>
            <div>
                <img src="https://www.portea.com/static/dddf7157e4d08bac88ed27f6fb19e76a/d8255/banner_doctors_talk.jpg" className='h-full w-full' alt="" />
            </div>

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'><Link to='/'> Home  &#62; </Link>  </li>
                    <li className=''>Doctor Speak   </li>
                </ul>
            </div>

            <DoctorSpeackHome/>

        </div>
    )
}

export default DoctorSpeak
