import React from 'react'

function CounsellingTable() {
    return (
        <div className='p-5 space-y-12'>
            <div className='bg-[#effffd]'>
                <h1 className='font-Montserrat font-bold text-[#616f6f] p-5'>Other Services</h1>
                <ul className=' font-poppins px-4 text-sm text-[#009aa0]'>
                    <li className='underline p-2 py-4'>medical equipment</li>
                    <li className='underline border-y p-2 py-4'>vaccination</li>
                    <li className='underline p-2 py-4'>Diagnostic at home</li>
                    <li className='underline border-y py-4 p-2'>Nursing</li>
                    <li className='underline p-2 py-4'>Physiotherapy</li>
                    <li className='underline border-y py-4 p-2'>Elder care</li>
                   
                </ul>
            </div>
        </div>
    )
}

export default CounsellingTable
