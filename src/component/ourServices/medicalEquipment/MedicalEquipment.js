import React from 'react'
import EquipmentHome from './EquipmentHome'
import PorteaService from '../PorteaService'

function MedicalEquipment() {
  return (
    <div>

      <div className='lg:flex lg:p-12'>
        <div className='lg:w-[70%]'>

          <EquipmentHome />

        </div>
        <div className='lg:w-[30%]'>

          <PorteaService />
        </div>
      </div>
    </div>
  )
}

export default MedicalEquipment
