import React from 'react'
import HomeNursing from './HomeNursing'
import { Link } from 'react-router-dom'
import NursingWorks from './NursingWorks'

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

            <NursingWorks/>

        </div>
    )
}

export default Nursing
