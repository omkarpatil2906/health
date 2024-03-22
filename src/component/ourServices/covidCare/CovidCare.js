import React from 'react'
import CovideHome from './CovideHome'
import { Link } from 'react-router-dom'

function CovidCare() {
  return (
    <div>

            <CovideHome />

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Nursing  &#62; </li>
                    <li>Home Nursing Services</li>

                </ul>
            </div>

          

        </div>
  )
}

export default CovidCare
