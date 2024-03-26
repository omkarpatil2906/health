import React from 'react'
import { Link } from 'react-router-dom'
import LabTestHome from './LabTestHome'
import CheckupPackage from './CheckupPackage'
import PorteaService from '../PorteaService'
import { motion } from 'framer-motion'

function LabTest() {
  return (
    <motion.div  variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1, y:0}

    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}>
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
          <PorteaService />
        </div>
      </div>

    </motion.div>
  )
}

export default LabTest
