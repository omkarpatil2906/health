import React from 'react'
import facebook from './asset/facebook.png'
import twitter from './asset/twitter.png'
import linkedin from './asset/linkdin.png'
import instagram from './asset/instgram.png'
import youtube from './asset/youtube.png'
import qai from './asset/QAI.png'
function ContactUs() {
  return (
    <div>
      <div className='text-white space-y-5 p-6 '>
        <h1 className='text-xl font-Montserrat font-bold'> <span className='border-b-4 py-2 border-[#009aa0]'>CONTACT</span>  US</h1>

        <div className='space-y-4 font-poppins  text-md font-semibold '>
          <h1>For Bookings and Service queries:</h1>
          <div>
            <p>Ph: 1800 121 2323</p>
            <p>Email: bookings@portea.com</p>
          </div>

          <h1>For Customer Support & Feedback:</h1>
          <div>
            <p>Ph: 1800 121 2323</p>
            <p>Email:customersupport@portea.com</p>
          </div>
        </div>

        <div className='flex gap-5 '>
          <img src={facebook} alt="Facebook" className='h-8' />
          <img src={twitter} alt="Twitter" className='h-8' />
          <img src={youtube} alt="Youtube" className='h-8'/>
          <img src={instagram} alt="Instagram" className='h-8' />
          <img src={linkedin} alt="LinkedIn" className='h-8' />
        </div>

      <div className='bg-[#35394b] gap-2 p-2 flex items-center '>
        <img src={qai} alt="" className='h-8'/>
        <h1 className='font-poppins font-light text-sm'>QAI Accrediated In Multiple Cities</h1>
      </div>
      </div>


    </div>
  )
}

export default ContactUs
