import React from 'react'

function OperationalCities() {
  return (
    <div className='flex justify-center items-center w-full mt-12'>
      <div className='flex flex-col lg:flex-row-reverse justify-center items-center w-[80%]'>
        <div className='w-full'>
            <h1 className='text-center font-bold font-Montserrat text-xl'>We Are Operational In 40+ Cities</h1>
            <p className='text-center font-poppins'>Explore the footprint map of Portea's presence in India.. With a nation-wide footprint, covering 40+ cities in India, Portea Medical continues to aspire to deliver our quality medical care to more customers and support them locally.</p>
        </div>

        <div className='w-full'>
            <img src="https://www.portea.com/static/dd4435e7ef53e8b357a2de7fe5f30dae/a3e81/loc.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default OperationalCities
