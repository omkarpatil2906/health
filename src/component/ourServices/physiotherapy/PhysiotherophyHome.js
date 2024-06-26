import React from 'react'
import HomeVisit from '../HomeVisit'
function Home() {
    return (
        <div>

            <div style={{
                backgroundImage: 'url(https://www.portea.com/static/dd69aac5f271983fc375fe1c227f752e/1abfa/1366x522-7.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 600,
                backgroundPosition: 'center',
            }}>
               

                <div className='lg:flex w-full h-full bg-[#29282877]  items-center justify-between '>
                    <div className='w-full pt-12 xl:mt-0'>
                        <h1 className='text-center xl:text-start xl:ml-12 xl:text-5xl text-2xl text-white font-Montserrat font-extrabold'>Physiotherapy At Home</h1>
                    </div>

                   
                        <div className=' w-full lg:w-[40%] '>
                            <HomeVisit />
                        </div>

                 
                </div>

            </div>
        </div>
    )
}

export default Home




// <div>

// <div className='relative'>
//     <img src="https://www.portea.com/static/dd69aac5f271983fc375fe1c227f752e/1abfa/1366x522-7.jpg" className='w-full h-[600px] object-cover bg-opacity-0' alt="" />

//     <div className='absolute  inset-0  lg:flex  items-center justify-between '>
//         <div className='w-full mt-12'>
//             <h1 className='text-center text-2xl text-white font-poppins font-bold'>Physiotherapy At Home</h1>
//         </div>

//         <div className='w-full flex justify-center'>
//             <div className=' w-full lg:w-[50%] '>
//                 <HomeVisit />
//             </div>

//         </div>
//     </div>

// </div>
// </div>