import React from 'react'
import EquipmentHome from './EquipmentHome'
import PorteaService from '../PorteaService'
import { motion } from 'framer-motion'

function MedicalEquipment() {
  return (
    <motion.div  
    variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1, y:0}

    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}>

      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>

          <EquipmentHome />

        </div>
        <div className='lg:w-[30%]'>

          <PorteaService />
        </div>
      </div>
    </motion.div>
  )
}

export default MedicalEquipment
