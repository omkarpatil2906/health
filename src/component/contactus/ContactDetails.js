import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";

function ContactDetails() {
    return (
        <div>
            <div className='p-7'>
                <div className='lg:px-24 space-y-3'>
                    <h1 className='text-orange-500 font-poppins'>We are here for  you!</h1>
                    <h2 className='text-3xl font-Montserrat font-bold '>Reach Us Any Way</h2>
                    <p className='font-poppins text-sm'>We are available from 8am-8pm (Mon-Sun) </p>
                </div>


                <div>
                    <div className='grid justify-center items-center space-y-3 p-5 lg:grid-cols-3'>
                        <div className='flex  flex-col items-center'>
                            <h1><MdLocationOn className='text-3xl text-[#009aa0cc]' /></h1>
                            <h2 className='font-bold text-xl font-Montserrat'>Address</h2>
                        </div>

                        <p className='font-poppins text-sm lg:border-l-4 lg:p-4'>No.69/B, 1st Cross, 1st Stage, Domlur Layout, Bengaluru -560071</p>
                    </div>


                    <div className='grid justify-center items-center space-y-3 p-5 lg:grid-cols-3'>
                        <div className='flex  flex-col items-center'>
                            <h1><LuPhoneCall className='text-3xl text-[#009aa0cc]' /></h1>
                            <h2 className='font-bold text-xl font-Montserrat'>Phone No.</h2>
                        </div>
                        <p className='font-poppins text-sm lg:border-l-4 lg:p-4'>1800 121 2323 (India)</p>
                        <p className='font-poppins text-sm lg:border-l-4 lg:p-4'>+1 (979) 401-2323 (Outside India)</p>
                    </div>


                    <div className='grid justify-center items-center space-y-3 p-5 grid-cols-3'>
                        <div className='flex  flex-col items-center'>
                            <h1><IoMdMail className='text-3xl text-[#009aa0cc]' /></h1>
                            <h2 className='font-bold text-xl font-Montserrat'>Email </h2>

                        </div>
                        <p className='font-poppins text-sm lg:border-l-4 lg:p-4'> <span>Bookings & Services</span> <br />bookings@portea.com</p>
                        <p className='font-poppins text-sm lg:border-l-4 lg:p-4'>Customer Support & Feedback <br />
                            customersupport@portea.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
