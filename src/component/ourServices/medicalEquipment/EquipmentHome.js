import React from 'react'

function EquipmentHome() {
    const equObj = [
        {
            id: 1,
            img: 'https://www.portea.com/static/d0922bc157c3ffcdd44f99721937c5a6/2a4de/Category-Geriatric-and-Mobility-Care-600.400.png',
            name: 'Geriatric And Mobility Care Equipment'
        },
        {
            id: 2,
            img: 'https://www.portea.com/static/9b45dd7892a55ff3b75613c4021a8742/2a4de/Category-Sleep-Therapy-600.400.png',
            name: 'Sleep Therapy Equipment'
        },
        {
            id: 3,
            img: 'https://www.portea.com/static/8e2ce97cc6690e466c9f05ec607bc761/2a4de/Category-Mother-and-baby-care-600.400.png',
            name: 'Mother And Baby Care Equipment'
        },
        {
            id: 4,
            img: 'https://www.portea.com/static/0ecd6e3e411974dfaa7453ec0e6b224e/2a4de/Category-Orthopedic-Physiotherapy-600.400.png',
            name: 'Orthopedic And Physiotherapy Care'
        },
        {
            id: 5,
            img: 'https://www.portea.com/static/f23eb2cfa4e8c8642ecf1e250b19fbe3/2a4de/category-Cardiac-Care-600.400.png',
            name: 'Cardiac Care'
        },
        {
            id: 6,
            img: 'https://www.portea.com/static/a0204e05da4b41031ad2e38d5a9506e0/2a4de/Category-Respiratory-care-600.400.png',
            name: 'Respiratory Care'
        },
    ]
    return (
        <div className='xl:flex'>

            <div className='grid p-5 sm:grid-cols-3 gap-3 xl:w-[70%]' >
                {equObj.map((item) => (
                    <div key={item.id} className='bg-white p-1 shadow-md'>
                        <img src={item.img} alt="" />
                        <h1 className='font-poppins text-sm p-2'>{item.name}</h1>
                        <button className='mx-2  px-4 p-1 text-white font-Montserrat rounded-md text-sm bg-orange-500 '>VIEW</button>
                    </div>
                ))}
            </div>


            <div className='bg-[#effffd] p-5 space-y-5 scroll-py-5 m-3 xl:w-[30%]'>
                <h1 className='text-xl font-bold font-Montserrat'>Portea Services</h1>

                <hr className='border-[#009aa0]  border-2' />
                <ul className='space-y-5 font-poppins'>
                    <li>Doctor Consultation</li> <hr />
                    <li>Nursing</li> <hr />
                    <li>Physiotherapy</li><hr />
                    <li>Trained Attendant</li><hr />
                    <li>Elder Care</li><hr />
                    <li>Mother & Baby Care</li><hr />
                    <li>Lab Tests</li><hr />
                    <li>Medical Equipment</li><hr />
                    <li>Speciality Pharma</li><hr />
                    <li>Critical Care</li>
                </ul>
            </div>

        </div>
    )
}

export default EquipmentHome
