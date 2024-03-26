import React from 'react'
import HomeDetails from './HomeDetails'

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
        <div>

            <div className='grid p-5 sm:grid-cols-3 gap-3 ' >
                {equObj.map((item) => (
                    <div key={item.id} className='bg-white p-1 shadow-md'>
                        <img src={item.img} alt="" />
                        <h1 className='font-poppins text-sm p-2'>{item.name}</h1>
                        <button className='mx-2  px-4 p-1 text-white font-Montserrat rounded-md text-sm bg-orange-500 '>VIEW</button>
                    </div>
                ))}
            </div>
                    <HomeDetails/>
        </div>
    )
}

export default EquipmentHome
