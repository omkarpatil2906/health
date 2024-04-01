import React from 'react'
import PorteaService from '../PorteaService'

function CovidTable() {
  return (
    <div className='p-5 space-y-12'>
         <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Other Covid Related Topics To Read</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2 py-4'>The Omicron Virus</li>
                    <li className='underline border-y p-2 py-4'>Covid Vaccine At Home</li>
                    <li className='underline p-2 py-4'>Importance of Vaccination For COVID19</li>
                    <li className='underline border-y py-4 p-2'>Covid Patient Care At Home</li>
                    <li className='underline p-2 py-4'>Pregnancy Care with COVID</li>
                    <li className='underline border-y py-4 p-2'>Elder Care with COVID</li>
                    <li className='underline p-2 py-4'>Home Care Services For Covid Patients</li>
                </ul>
            </div>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Covid Services From Portea</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2 py-4'>Protect Your Community</li>
                    <li className='underline border-y p-2 py-4'>Home Isolation Program</li>
                    <li className='underline p-2 py-4'>Get Tested for COVID at the Safety of Your Home!</li>
                </ul>
            </div>

            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Other Covid Support From Portea</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2 py-4'>COVID ARMOUR - Protect Your Community from COVID</li>
                    <li className='underline border-y p-2 py-4'>How Well Prepared is Portea</li>
                    <li className='underline p-2 py-4'>Special Packages on COVID ARMOUR</li>
                    <li className='underline border-y py-4 p-2'>The Omicron Virus</li>
                </ul>
            </div>


            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Other At Home Services From Portea</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2 py-4'>Physiotherapy at home</li>
                    <li className='underline border-y p-2 py-4'>Nursing Care Service at Home</li>
                    <li className='underline p-2 py-4'>Diabetes Care Plan</li>
                    <li className='underline border-y py-4 p-2'>Elder care at home</li>
                    <li className='underline p-2 py-4'>Medical Equipment for Sale/Rent</li>
                    <li className='underline border-y py-4 p-2'>Vaccination At Home</li>
                    <li className='underline p-2 py-4'>Mother & Baby Care at home</li>
                    <li className='underline border-y py-4 p-2'>Trained attendant at home</li>
                    <li className='underline p-2 py-4'>Diagnostic at home</li>
                </ul>
            </div>

            <PorteaService/>
    </div>
  )
}

export default CovidTable
