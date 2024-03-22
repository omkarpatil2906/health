import React from 'react'
import { Link } from 'react-router-dom'
import LabTestHome from './LabTestHome'

function LabTest() {
  return (
    <div>
      <LabTestHome/>
      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
        <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
        <li className='font-bold  text-orange-500'> Lab Sample Collection &#62; </li>
        <li>Diagnostics Lab Tests At Home Service</li>

        </ul>
      </div>
     
 
    </div>
  )
}

export default LabTest
