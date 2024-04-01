import React from 'react'
import ConsultationHome from './ConsultationHome'
import { Link } from 'react-router-dom'
import DoctorHomeService from './DoctorHomeService'
import PorteaService from '../PorteaService'
import DoctorConsultationTable from './DoctorConsultationTable'

function DoctorConsultation() {
  return (
    <div>

      <ConsultationHome />

      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'>Doctor Visit  &#62; </li>
          <li>Doctor Consultations</li>

        </ul>
      </div>
      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>
          <DoctorHomeService />
        </div>
        <div className='lg:w-[30%]'>
          <DoctorConsultationTable />
          <PorteaService />
        </div>
      </div>

    </div>
  )
}

export default DoctorConsultation
