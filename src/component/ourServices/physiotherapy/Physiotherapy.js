import React from 'react'
import PhysiotherapyHome from './PhysiotherophyHome'
import Workss from './Workss'
import { Link } from 'react-router-dom'



function Physiotherapy() {
  return (
    <div>
      <PhysiotherapyHome />
      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'>Physiotherapy  &#62; </li>
          <li>Physiotherapy At Home</li>

        </ul>
      </div>
      <Workss />

    </div>
  )
}

export default Physiotherapy
