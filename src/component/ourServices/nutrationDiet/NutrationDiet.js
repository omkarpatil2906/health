import React from 'react'
import NutrationHome from './NutrationHome'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NutrationDiet() {
  return (
    <motion.div  variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1, y:0}

    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}>

            <NutrationHome />

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Nursing  &#62; </li>
                    <li>Home Nursing Services</li>

                </ul>
            </div>

         

        </motion.div>
  )
}

export default NutrationDiet
