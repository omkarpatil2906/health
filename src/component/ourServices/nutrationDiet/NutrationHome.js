import React from 'react'
import HomeVisit from '../HomeVisit'

function NutrationHome() {
  return (
    <div>

<div style={{
                backgroundImage: 'url(https://www.portea.com/static/https://www.portea.com/static/86d34fbc8306b7f62dae2b08aa754e4f/16310/banner-img-doctor.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 600,
                backgroundPosition: 'center',
            }}>


                <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
                    <div className='w-full pt-12 xl:mt-0'>
                        <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>Nutrition & Diet Consultation</h1>
                    </div>


                    <div className=' w-full lg:w-[40%] '>
                        <HomeVisit />
                    </div>


                </div>

            </div>
      
    </div>
  )
}

export default NutrationHome
