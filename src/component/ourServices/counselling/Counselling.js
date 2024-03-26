import React from 'react'
import { Link } from 'react-router-dom'
import CounsellingHome from './CounsellingHome'
import { motion } from 'framer-motion'

function Counselling() {
  return (
    <motion.div  variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1, y:0}

    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}>

            <CounsellingHome/>

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Doctor Visit  &#62; </li>
                    <li>Counseling At Home</li>

                </ul>
            </div>



        </motion.div>
  )
}

export default Counselling
