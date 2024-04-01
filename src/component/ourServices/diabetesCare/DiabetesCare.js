import React from 'react'
import DiabetesHome from './DiabetesHome'
import { Link } from 'react-router-dom'
import DiabetesPlan from './DiabetesPlan'
import PorteaService from '../PorteaService'
import DiabetesCareTable from './DiabetesCareTable'

function DiabetesCare() {
  return (
    <div >

      <DiabetesHome />

      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'>Diabetes Subscription Plan &#62; </li>
          <li>Diabetes Care</li>

        </ul>
      </div>

      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>
          <DiabetesPlan />

        </div>
        <div className='lg:w-[30%]'>
          <DiabetesCareTable />
          <PorteaService />
        </div>
      </div>

    </div>
  )
}

export default DiabetesCare
