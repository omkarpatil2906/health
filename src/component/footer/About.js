import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className=''>
            <div className='text-white space-y-5 p-6'>
                <h1 className='text-xl font-Montserrat font-bold'> <span className='border-b-4 py-2 border-[#009aa0]'>ABOUT</span>  US</h1>
                <ul className='font-poppins text-md font-semibold space-y-3 '>
                    <li> <Link to="/about">&#62;  Our Team</Link> </li>
                    <li> <Link to="/doctor_speak"> &#62; Doctor Speak</Link></li>
                    <li> <Link to="/press-media"> &#62; Press & Media</Link></li>
                    <li> &#62;  Annual Return </li>
                    <li> &#62; Careers</li>
                    <li> &#62; Partner With Us</li>
                    <li> <Link to='/contact_us'> &#62; Contact Us</Link></li>
                    <li> &#62; FAQs </li>
                    <li> &#62; Testimonials</li>
                </ul>
            </div>
        </div>
    )
}

export default About
