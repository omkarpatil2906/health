import React from 'react'
import TrainedHome from './TrainedHome'
import { Link } from 'react-router-dom'
import TrainedService from './TrainedService'

function TrainedAttendants() {
  return (
    <div>
      <TrainedHome/>
      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
        <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
        <li className='font-bold  text-orange-500'>Trained Attendants  &#62; </li>
        <li>Trained Attendants</li>

        </ul>
      </div>
     
    <TrainedService/>
    </div>
  )
}

export default TrainedAttendants
