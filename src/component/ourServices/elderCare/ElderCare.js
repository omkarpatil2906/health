import React from 'react'
import ElderCareHome from './ElderCareHome'
import { Link } from 'react-router-dom'
import CarePlan from './CarePlan'

function ElderCare() {
    return (
        <div>

            <ElderCareHome />

            <div className='bg-[#fafafa] text-sm font-Montserrat'>
                <ul className='flex space-x-2 p-4'>
                    <li className='font-bold  text-orange-500'> <Link to='/'> Home  &#62; </Link>  </li>
                    <li className='font-bold  text-orange-500'>Elder Care  &#62; </li>
                    <li>Elder Care At Home</li>
                </ul>
            </div>
            <CarePlan />
        </div>
    )
}

export default ElderCare
