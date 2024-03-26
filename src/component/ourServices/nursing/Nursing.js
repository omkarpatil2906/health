import React from 'react'
import HomeNursing from './HomeNursing'
import { Link } from 'react-router-dom'
import NursingWorks from './NursingWorks'
import PorteaService from '../PorteaService'
import { motion } from 'framer-motion'
function Nursing() {
    return (
        <motion.div
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
      
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5, delay:0.25}}
          >

            <HomeNursing />

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Nursing  &#62; </li>
                    <li>Home Nursing Services</li>

                </ul>
            </div>

            <div className='lg:flex lg:p-12'>
                <div className='lg:w-[70%]'>
                    <NursingWorks />
                </div>
                <div className='lg:w-[30%]'>
                    <PorteaService />
                </div>
            </div>

        </motion.div>
    )
}

export default Nursing
