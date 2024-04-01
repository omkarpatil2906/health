import React from 'react'
import { Link } from 'react-router-dom'
import LabTestHome from './LabTestHome'
import CheckupPackage from './CheckupPackage'
import PorteaService from '../PorteaService'
import LabTestTable from './LabTestTable'

function LabTest() {
  return (
    <div >
      <LabTestHome />
      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'> Lab Sample Collection &#62; </li>
          <li>Diagnostics Lab Tests At Home Service</li>

        </ul>
      </div>

      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>
          <CheckupPackage />
        </div>
        <div className='lg:w-[30%]'>
          <LabTestTable/>
          <PorteaService />
        </div>
      </div>

    </div>
  )
}

export default LabTest
