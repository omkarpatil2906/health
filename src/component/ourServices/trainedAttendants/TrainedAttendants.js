import React from 'react'
import TrainedHome from './TrainedHome'
import { Link } from 'react-router-dom'
import TrainedService from './TrainedService'
import PorteaService from '../PorteaService'
import TrainedTable from './TrainedTable'

function TrainedAttendants() {
  return (
    <div >
      <TrainedHome />
      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'>Trained Attendants  &#62; </li>
          <li>Trained Attendants</li>

        </ul>
      </div>


      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>
          <TrainedService />
        </div>
        <div className='lg:w-[30%]'>
          <TrainedTable/>
          <PorteaService />
        </div>
      </div>

    </div>
  )
}

export default TrainedAttendants
