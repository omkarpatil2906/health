import React from 'react'
import About from './About'
import OurServices from './OurServices'
import PopularServices from './PopularServices'
import ContactUs from './ContactUs'
import ContactInstruction from './ContactInstruction'

function Footer() {
  return (
    <div className='bg-[#252835]'>

      <div className='grid lg:grid-cols-2 xl:grid-cols-4 py-12 xl:p-12'>
        <About />
        <OurServices />
        <PopularServices />
        <ContactUs />
      </div>

      <div className='xl:px-12'>

        <ContactInstruction />
      </div>
    </div>
  )
}

export default Footer
