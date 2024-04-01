import React from 'react'
import { PiCheckBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import ManagementTeam from './ManagementTeam';

function About() {
    return (
        <div className='flex flex-col justify-center items-center w-full'>

            <div style={{
                backgroundImage: 'url(https://www.portea.com/static/newbanner-88b8798f5819e1eb0c95f279b1ee57c3.png)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover',
                height: 350,
                backgroundPosition: 'center',
            }}>
                <div className='bg-[#009aa0cc] h-full w-full flex flex-col space-y-3 justify-center items-center'>

                    <h1 className='text-4xl font-bold text-white font-Montserrat'>About Us</h1>

                    <ul className='flex text-lg space-x-2 text-white font-poppins'>
                        <li> <Link to='/'>Home</Link></li>
                        <li>&#62;</li>
                        <li>About Us</li>
                    </ul>

                </div>

            </div>

            <div className=' p-5 mt-5 lg:p-12   lg:w-[80%]'>
                <h1 className='font-bold font-Montserrat' data-aos='fade-right' data-aos-duration='1000'>About Us</h1>

                <div className='space-y-2 gap-7 lg:flex ' >
                    <div className='w-full '>
                        <h2 className='font-bold font-Montserrat text-4xl xl:leading-[60px]' data-aos='flip-up' data-aos-duration='1000' data-aos-delay='300'>PORTEA – <span className='text-orange-500'>Heal at The Comfort</span> of Your Home</h2>
                    </div>
                    <div className='font-poppins w-full xl:text-xl xl:leading-[40px]' data-aos='fade-left' data-aos-delay='700' data-aos-duration='1000'>
                        <p>Portea Medical delivers quality care with compassion. We bring quality medical care into our patients’ homes and aim to make primary healthcare not only more accessible, but also more affordable and accountable to our patients’ needs.</p>
                    </div>

                </div>

            </div>



            <div className='flex justify-around gap-12 p-5 xl:p-0'>
                <div>
                    <img src="https://www.portea.com/static/d8e97812d242400b1414a21e0119c8ec/061dc/about.png" className='w-full' alt="" />
                </div>
                <div>
                    <img src="https://www.portea.com/static/94a436fd1070660a6f220aa80d240b73/5c6bd/about-1.png" className='w-full' alt="" />
                </div>
            </div>


            <div className='lg:flex gap-12 space-y-4 xl:space-y-0 w-[70%] py-12'>

                <div className='bg-white space-y-3 w-full shadow-xl lg:h-72 p-5 py-12' data-aos="zoom-in" data-aos-duration='1000'>
                    <PiCheckBold className='bg-[#009ba0] text-4xl p-2 text-white rounded-full' />
                    <h1 className='font-bold font-poppins'>Our Vision</h1>
                    <p className='font-Montserrat text-sm'>Portea Medical aims to deliver quality ‘out-of-hospital’ medical care, which is affordable and easily accessible to patients, thus improving the quality of life of patients and families.</p>

                </div>

                <div className='bg-white w-full space-y-3 lg:h-72 shadow-xl p-5 py-12'  data-aos="zoom-in" data-aos-duration='1000' data-aos-delay="500">
                    <PiCheckBold className='bg-[#009ba0] text-4xl p-2 text-white rounded-full' />
                    <h1 className='font-poppins font-bold'>Our Mission</h1>
                    <p className='font-Montserrat text-sm'>To provide the best care to every patient through a strong focus on service excellence and simplified processes guided by evidence-based medical care and technology in the following areas- Preventive Care | Pre/Post Natal Care | Post-operative Care | Critical Care | Chronic Disease Management | Palliative Care | & Elder Care.</p>

                </div>

            </div>


            <ManagementTeam />

        </div>
    )
}

export default About
