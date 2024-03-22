import React from 'react'
import HomeVisit from '../HomeVisit'

function DiabetesHome() {
  return (
    <div>

<div style={{
                backgroundImage: 'url(https://www.portea.com/static/b8cc42703c6b6613246dc6e0c4e8929b/16310/Diabetes-Care-Plan.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 600,
                backgroundPosition: 'center',
            }}>


                <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
                    <div className='w-full pt-12 xl:mt-0'>
                        <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>Diabetes Care</h1>
                    </div>


                    <div className=' w-full lg:w-[40%] '>
                        <HomeVisit />
                    </div>


                </div>

            </div>
      
    </div>
  )
}

export default DiabetesHome
