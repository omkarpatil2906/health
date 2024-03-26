import React from 'react'

function CarePlan() {
    const dataObj = [
        {
            id: 1,
            plan: 'REMOTE PACKAGE',
            price: 2999
        },
        {
            id: 2,
            plan: 'PRIME BASIC PACKAGE',
            price: 5000
        },
        {
            id: 3,
            plan: 'PRIME PREVENTIVE PACKAGE',
            price: 10000
        },
        {
            id: 4,
            plan: 'PRIME PREMIUM PACKAGE',
            price: 20000
        },
    ]
    return (
        <div>

            <div className='p-5 lg:px-8 space-y-5'>
                <h1 className='border-s-4 border-orange-500 px-2  font-bold font-Montserrat text-2xl'>Elder-Care Plans At Home</h1>


                <table className='font-poppins text-xs text-center'>
                    <tr>
                        <th className='bg-[#a3e4db] p-2 w-64'>Plan</th>
                        <th className='bg-[#c0fefc] p-2 w-64'>Per Month</th>
                    </tr>

                    {
                        dataObj.map((item) => (
                            <tr key={item.id}>
                                <td className='bg-[#a3e4db] border p-2'> {item.plan} </td>
                                <td className='bg-[#c0fefc] border p-2'> $ {item.price}</td>
                            </tr>
                        ))
                    }
                </table>

                <h1 className='font-bold font-Montserrat text-[#616f6f] text-xl'>REMOTE PACKAGE @ 2999/-</h1>

                <p className='font-poppins text-lg text-[#616f6f]'>Basic Eldercare plan at home at a cost Rs.100 per day, includes,</p>
                <ul className='list-disc px-3 list-inside marker:text-[#616f6f] space-y-4 font-poppins text-[#616f6f]'>

                    <li>15 doctor teleconsultation</li>
                    <li>6 online nutrition counseling</li>
                    <li>4 physiotherapy video-consultations</li>
                    <li>1 need assessment over the phone</li>
                    <li>Health manager</li>
                    <li>Emergency coordination</li>
                </ul>



                <h1 className='font-bold text-xl text-[#616f6f] font-Montserrat'>PRIME BASIC PACKAGE @ 5000/-</h1>

                <p className='font-poppins text-[#616f6f]'>Prime Basic Eldercare plan at home at a cost Rs.167 per day, includes,</p>
                <ul className='list-disc list-inside marker:text-[#616f6f] px-3 text-[#616f6f] space-y-4 font-poppins'>

                    <li>1 Dr.Visit / Comprehensive Assessment</li>
                    <li>2 Dr. Tele consultation</li>
                    <li>4 physiotherapy video-consultations</li>
                    <li>1 need assessment over the phone</li>
                    <li>Health manager</li>
                    <li>Emergency coordination</li>
                </ul>


            </div>

        </div>
    )
}

export default CarePlan
