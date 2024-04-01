import React from 'react'
import { Link } from 'react-router-dom'
import PressHome from './PressHome'

function PressMedia() {
    return (
        <div>
            <div>


                <div>
                    <img src="https://www.portea.com/static/01d4db88abf69c90eed8e0f17c724fdf/d8255/banner_innews.jpg" className='h-full w-full' alt="" />
                </div>

                <div className='bg-[#fafafa] text-sm font-Montserrat'>
                    <ul className='flex space-x-2 p-4'>
                        <li className='font-bold  text-orange-500'><Link to='/'> Home  &#62; </Link>  </li>
                        <li className=''>Press & Media </li>
                    </ul>
                </div>

               <PressHome/>

            </div>
        </div>
    )
}

export default PressMedia
