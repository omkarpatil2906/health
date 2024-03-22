import React from 'react'
import HomeVisit from '../HomeVisit'

function MotherBabyCareHome() {
  return (
    <div>
          <div style={{
                backgroundImage: 'url(https://www.portea.com/static/7160cf76fa9b907c95a9bb20cda41712/16310/1366x522_nb-baby-mom.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 600,
                backgroundPosition: 'center',
            }}>


                <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
                    <div className='w-full pt-12 xl:mt-0'>
                        <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>New Born Baby And Mother Care At Home</h1>
                    </div>


                    <div className=' w-full lg:w-[40%] '>
                        <HomeVisit />
                    </div>


                </div>

            </div>
    </div>
  )
}

export default MotherBabyCareHome
