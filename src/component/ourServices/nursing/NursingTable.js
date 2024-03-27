import React from 'react'

function NursingTable() {
    return (
        <div className='p-5 space-y-12'>
            <div className='bg-[#effffd]'>
                <h1 className=' font-Montserrat font-bold text-[#616f6f] p-5'>Our Nursing Carers Help You With Following Conditions </h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    {/* <li className='underline p-2'></li> */}
                    <li className='underline py-4 border-b p-2'>Long Term Nursing Care at home</li>
                    <li className='underline py-4 p-2'>Wound Dressing</li>
                    <li className='underline py-4 border-y p-2'>Nurse For Chemotherapy</li>
                    <li className='underline py-4 p-2'>Nursing Care for Patient Attendant</li>
                    <li className='underline py-4 border-y p-2'>Nurse For Infusion</li>
                    <li className='underline py-4 p-2'>Nurse For Nebulization</li>
                    <li className='underline py-4 border-y p-2'>Nursing Care for Sleep Apnea</li>
                    <li className='underline py-4 p-2'>Nursing Care for Metastatic Cancer</li>
                </ul>
            </div>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Some Of The Lab Tests And Packages Provided By Portea </h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline py-4 p-2'>Chikungunya (CHIKV) Lab Test</li>
                    <li className='underline py-4 border-y p-2'>bleeding time and clotting time Test</li>
                    <li className='underline py-4 p-2'>Urine Routine test</li>
                    <li className='underline py-4 border-t p-2'>VDRL Test</li>
                   
                </ul>
            </div>


        </div>
    )
}

export default NursingTable
