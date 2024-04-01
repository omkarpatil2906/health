import React from 'react'
import CovideHome from './CovideHome'
import { Link } from 'react-router-dom'

function CovidCare() {
  return (
    <div>

      <div>
        <img src="https://www.portea.com/static/34369550bc54d8cdbc4d79bc1b417575/1abfa/covid.banner_1366_522-1.jpg" className='w-full object-cover h-[500px]' alt="" />
      </div>


      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'>Nursing  &#62; </li>
          <li>Home Nursing Services</li>

        </ul>
      </div>


      <CovideHome />

    </div>
  )
}

export default CovidCare
