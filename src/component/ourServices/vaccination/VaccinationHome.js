import React from 'react'
import HomeVisit from '../../ourServices/HomeVisit'

function VaccinationHome() {
  return (
    <div>

<div style={{
                backgroundImage: 'url(https://www.portea.com/static/2740ee553d2da2a672a4700850ba80b0/16310/banner-img-vaccination.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 600,
                backgroundPosition: 'center',
            }}>


                <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
                    <div className='w-full pt-12 xl:mt-0'>
                        <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>Vaccination At Home</h1>
                    </div>


                    <div className=' w-full lg:w-[40%] '>
                        <HomeVisit />
                    </div>


                </div>

            </div>
      
    </div>
  )
}

export default VaccinationHome
