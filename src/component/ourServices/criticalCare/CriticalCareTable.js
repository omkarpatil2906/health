import React from 'react'

function CriticalCareTable() {
    return (
        <div className='p-5 space-y-12'>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>24 Hour Nursing Care In Cities</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2 py-4'>24hr Nursing Care in Bangalore</li>
                    <li className='underline border-y p-2 py-4'>24hr Nursing Care in Delhi</li>
                    <li className='underline p-2 py-4'>24hr Nursing Care in Mumbai</li>
                    <li className='underline border-y py-4 p-2'>24hr Nursing Care in Kolkata</li>
                    <li className='underline p-2 py-4'>24hr Nursing Care in Hyderabad</li>
                    <li className='underline border-y py-4 p-2'>24hr Nursing Care in Pune</li>
                    <li className='underline p-2 py-4'>24hr Nursing Care in Gurgaon</li>
                </ul>
            </div>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Other Services By Portea</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline py-4 p-2'>Physiotherapy</li>
                    <li className='underline py-4 border-y p-2'>Nursing Services At Home</li>
                    <li className='underline py-4 p-2'>Medical Equipment</li>
                    <li className='underline py-4 border-y p-2'>New Born Baby Aad Mother Care At Home</li>
                    <li className='underline py-4 p-2'>Nutrition & Diet Consultant</li>
                    <li className='underline py-4 border-y p-2'>Lab Tests At Home</li>
                    <li className='underline py-4 p-2'>Doctor Consultations</li>
                    <li className='underline py-4 border-y p-2'>Trained Attendants</li>
                    <li className='underline py-4 p-2'>Vaccination At Home</li>
                </ul>
            </div>

        </div>
    )
}

export default CriticalCareTable
