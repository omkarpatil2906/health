import React from 'react'
import { Link } from 'react-router-dom'

function OurServices() {
  return (
    <div>
            <div className='text-white space-y-5 p-6'>
                <h1 className='text-xl font-Montserrat font-bold'> <span className='border-b-4 py-2 border-[#009aa0]'>OUR</span> SERVICES </h1>
                <ul className='font-poppins text-md font-semibold space-y-3'>
                    <li> <Link to='/physiotherapy'> &#62;   Physiotherapy </Link></li>
                    <li> <Link to='/doctor-consulation'> &#62; Doctor Consultations </Link></li>
                    <li> <Link to='/nursing'> &#62;  Nursing </Link></li>
                    <li> <Link to='/medicalequipments'> &#62;  Medical Equipment </Link> </li>
                    <li> <Link to='/trainedattendants'> &#62; Trained Attendants </Link></li>
                    <li> <Link to='/labtest'> &#62; Lab Tests </Link></li>
                    <li> <Link to='/counselling'> &#62; Counselling </Link></li>
                   
                </ul>
            </div>
        </div>
  )
}

export default OurServices
