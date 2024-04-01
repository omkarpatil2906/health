import React from 'react'
import { Link } from 'react-router-dom'
import VaccinationHome from './VaccinationHome'
import AboutVaccination from './AboutVaccination'
import PorteaService from '../PorteaService'
import TableVaccination from './TableVaccination'

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

            <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>
          <AboutVaccination/>
        </div>
        <div className='lg:w-[30%]'>
          <TableVaccination />
          <PorteaService/>
        </div>
      </div>
        </div>
  )
}

export default Vaccination
