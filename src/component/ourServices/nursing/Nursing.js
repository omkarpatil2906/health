import React from 'react'
import HomeNursing from './HomeNursing'
import { Link } from 'react-router-dom'
import NursingWorks from './NursingWorks'
import PorteaService from '../PorteaService'
import NursingTable from './NursingTable'
function Nursing() {
    return (
        <div>

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
                    <NursingTable/>
                    <PorteaService />
                </div>
            </div>

        </div>
    )
}

export default Nursing
