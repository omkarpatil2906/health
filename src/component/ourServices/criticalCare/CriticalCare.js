import React from 'react'
import CriticalHome from './CriticalHome'
import { Link } from 'react-router-dom'
import CriticalInterest from './CriticalInterest'

function CriticalCare() {
  return (
    <div  v>

    <CriticalHome />

    <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
            <li className='font-bold  text-orange-500'><Link to='/'> Home  &#62; </Link>  </li>
            <li className='font-bold  text-orange-500'>Nursing  &#62; </li>
            <li>Critical Care At Home</li>

        </ul>
    </div>
    <div className='lg:p-12'>
    <CriticalInterest/>

    </div>

</div>
  )
}

export default CriticalCare
