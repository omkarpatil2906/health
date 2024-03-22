import React from 'react'

function Home2() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen sm:mt-24 md:m-0'>

                <div className='flex flex-col lg:flex-row-reverse items-center justify-center h-[100%]'>
                    <div className='px-5 flex justify-center lg:w-[100%]'>
                        <img src="https://www.portea.com/static/7e2d9953dbabad6e0c533699ec00ddcb/2049f/hero.webp" className='' alt="" />
                    </div>

                    <div className='p-2 flex flex-col justify-center lg:w-[100%] space-y-8 xl:pl-32'>
                        <h1 className='text-3xl text-center xl:text-4xl xl:text-start xl:leading-[66px] font-Montserrat font-semibold'>Quality Medical Care Delivered At The <span className='text-[#00979e]'>Comfort of Your Home</span>  </h1>

                        <p className='m-6 lg:m-2 text-sm text-center xl:text-start xl:text-xl xl:leading-9 font-poppins font-light'>Portea Medical delivers quality care with compassion. We bring quality medical care into our patients’ homes and aim to make primary healthcare not only more accessible but also more affordable and accountable to our patient’s needs.</p>

                        <button className='mx-auto xl:mx-0 xl:mr-auto  px-8 py-2 rounded-lg bg-orange-500 text-white font-Montserrat'>Book Now</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home2
