import React from 'react'
import ConsultationHome from './ConsultationHome'
import { Link } from 'react-router-dom'

function DoctorConsultation() {
  return (
    <div>

            <ConsultationHome/>

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Doctor Visit  &#62; </li>
                    <li>Doctor Consultations</li>

                </ul>
            </div>

        

        </div>
  )
}

export default DoctorConsultation
