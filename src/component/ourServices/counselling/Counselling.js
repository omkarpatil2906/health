import React from 'react'
import { Link } from 'react-router-dom'
import CounsellingHome from './CounsellingHome'
import CounslingContent from './CounslingContent'
import PorteaService from '../PorteaService'

function Counselling() {
  return (
    <div>

            <CounsellingHome/>

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Doctor Visit  &#62; </li>
                    <li>Counseling At Home</li>

                </ul>
            </div>
            <div className='lg:flex lg:p-12'>
                <div className='lg:w-[70%]'>
                    <CounslingContent />
                </div>
                <div className='lg:w-[30%]'>
                   
                    <PorteaService />
                </div>
            </div>


        </div>
  )
}

export default Counselling
