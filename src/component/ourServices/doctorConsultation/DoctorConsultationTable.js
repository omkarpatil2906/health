import React from 'react'

function DoctorConsultationTable() {
    return (
        <div className='p-5 space-y-12'>
            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Doctor Service In Cities</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline py-4 p-2'>Doctors in Bangalore</li>
                    <li className='underline py-4 border-y p-2'>Doctors in Kolkata</li>
                    <li className='underline py-4 p-2'>Doctors in Indore</li>
                    <li className='underline py-4 border-y p-2'>Doctors in Delhi</li>
                    <li className='underline py-4 p-2'>Doctor in Hyderabad</li>
                    <li className='underline py-4 border-y p-2'>Doctors in Mumbai</li>
                    <li className='underline py-4 p-2'>Doctors in Pune</li>
                   
                </ul>
            </div>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Pathology Lab Tests By Portea</h1>
                <ul className='font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2'>LDL-Cholesterol (Low-density lipoprotein cholesterol) Test</li>
                    <li className='underline py-4 border-y p-2'>Amoebiasis Test</li>
                    <li className='underline py-4 p-2'>17 OH Progesterone Test</li>
                    <li className='underline py-4 border-y p-2'>osterone (Free / Total) Test</li>
                    <li className='underline py-4 p-2'>Lead (Pb) Test</li>
                    <li className='underline py-4 border-y p-2'>Lipid Profile Test</li>
                    <li className='underline py-4 p-2'>Lithium level Test</li>
                    <li className='underline py-4 border-y p-2'>Peripheral blood smear Test</li>
                    <li className='underline py-4 p-2'>Magnesium (Mg/Mag) (Xylidyl Blue) Test</li>
                </ul>
            </div>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Popular Searches</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline py-4 p-2'>Physiotherapy</li>
                    <li className='underline py-4 border-y p-2'>ECG</li>
                    <li className='underline py-4 p-2'>Doctors near me</li>
                    <li className='underline py-4 border-y p-2'>Physiotherapist</li>
                    <li className='underline py-4 p-2'>Physiotherapy near me</li>
                    <li className='underline py-4 border-y p-2'>Baby care</li>
                    <li className='underline py-4 p-2'>Online doctor</li>
                  
                </ul>
            </div>
        </div>
    )
}

export default DoctorConsultationTable
