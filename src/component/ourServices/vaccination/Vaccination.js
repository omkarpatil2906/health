import React from 'react'
import VaccinationHome from './VaccinationHome'
import { Link } from 'react-router-dom'

function Vaccination() {
  return (
    <div>

            <VaccinationHome/>

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Vaccination  &#62; </li>
                    <li>Vaccination At Home</li>
                </ul>
            </div>

          

        </div>
  )
}

export default Vaccination
