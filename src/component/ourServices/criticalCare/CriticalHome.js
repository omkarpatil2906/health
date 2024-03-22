import React from 'react'
import HomeVisit from '../HomeVisit'

function CriticalHome() {
    return (
        <div>

            <div style={{
                backgroundImage: 'url(https://www.portea.com/static/c26b4ad2b58179051aa7bcd1a8ff22d5/1abfa/img-cancer-web-d-primary.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 600,
                backgroundPosition: 'center',
            }}>


                <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
                    <div className='w-full pt-12 xl:mt-0'>
                        <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>Critical Care At Home</h1>
                    </div>


                    <div className=' w-full lg:w-[40%] '>
                        <HomeVisit />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default CriticalHome
