import React from 'react'
import HomeVisit from '../HomeVisit'

function ConsultationHome() {
  return (
    <div style={{
      backgroundImage: 'url(https://media.istockphoto.com/id/1283195930/photo/portrait-of-doctor-standing-at-hospital.jpg?s=2048x2048&w=is&k=20&c=6pzkGEV_ovmxOOXS_y-rSpbuN-kdFc6kOj7bCiv67aU=)',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      backgroundSize: 'cover',
      height: 600,
      backgroundPosition: 'top',
    }}>


      <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
        <div className='w-full pt-12 xl:mt-0'>
          <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>Doctor Consultations
          </h1>
        </div>

        <div className=' w-full lg:w-[40%] '>
          <HomeVisit />
        </div>


      </div>

    </div>
  )
}

export default ConsultationHome
