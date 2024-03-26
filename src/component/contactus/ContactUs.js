import React from 'react'
import { Link } from 'react-router-dom'
import ContactDetails from './ContactDetails'
import ContactCity from './ContactCity'

function ContactUs() {
    return (
        <div>
            <div style={{
                backgroundImage: 'url(https://www.portea.com/static/newbanner-88b8798f5819e1eb0c95f279b1ee57c3.png)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 350,
                backgroundPosition: 'center',
            }}>
                <div className='bg-[#009aa0cc] h-full w-full flex flex-col space-y-3 justify-center items-center'>

                    <h1 className='text-4xl font-bold text-white font-Montserrat'>Contact Us</h1>

                    <ul className='flex text-lg space-x-2 text-white font-poppins'>
                        <li> <Link to='/'>Home</Link></li>
                        <li>&#62;</li>
                        <li>Contact Us</li>
                    </ul>

                </div>

            </div>

            <ContactDetails/>

            <ContactCity/>

        </div>
    )
}

export default ContactUs
