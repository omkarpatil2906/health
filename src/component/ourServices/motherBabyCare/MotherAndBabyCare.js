import React from 'react'
import MotherBabyCareHome from './MotherBabyCareHome'
import { Link } from 'react-router-dom'
import CareService from './CareService'
import PorteaService from '../PorteaService'
import { motion } from 'framer-motion'
import MotherBabyCareTable from './MotherBabyCareTable'

function MotherAndBabyCare() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }

      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >

      <MotherBabyCareHome />

      <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
          <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
          <li className='font-bold  text-orange-500'>Kanga And Roo Care  &#62; </li>
          <li>New Born Baby And Mother Care At Home</li>

        </ul>
      </div>
      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>
          <CareService />
        </div>
        <div className='lg:w-[30%]'>
          <MotherBabyCareTable />
          <PorteaService />
        </div>
      </div>


    </motion.div>
  )
}

export default MotherAndBabyCare
