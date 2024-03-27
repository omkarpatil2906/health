import React from 'react'
import CriticalHome from './CriticalHome'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CriticalInterest from './CriticalInterest'

function CriticalCare() {
  return (
    <motion.div  variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1, y:0}

    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}>

    <CriticalHome />

    <div className='bg-[#fafafa] text-sm font-Montserrat'>
        <ul className='flex space-x-2 p-4'>
            <li className='font-bold  text-orange-500'><Link to='/'> Home  &#62; </Link>  </li>
            <li className='font-bold  text-orange-500'>Nursing  &#62; </li>
            <li>Critical Care At Home</li>

        </ul>
    </div>
    <CriticalInterest/>

</motion.div>
  )
}

export default CriticalCare
