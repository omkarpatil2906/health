import React from 'react'
import MotherBabyCareHome from './MotherBabyCareHome'
import { Link } from 'react-router-dom'

function MotherAndBabyCare() {
  return (
    <div>

    <MotherBabyCareHome />

    <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
            <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
            <li className='font-bold  text-orange-500'>Kanga And Roo Care  &#62; </li>
            <li>New Born Baby And Mother Care At Home</li>

        </ul>
    </div>

    

</div>
  )
}

export default MotherAndBabyCare
