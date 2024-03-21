import React from 'react'

function NewOffer() {
    const obj = [
        {
            id: 1,
            dics: '100 Off',
            title: 'Physiotherapy',
            disc2: 'Flat Rs.100/- Off On',
            massage: 'Your First Physiotherapy Session',
            img: 'https://www.portea.com/static/4bbd80dd562c5ecc0cdee12d84a223a4/61e93/womens.webp'
        },
        {
            id: 2,
            dics: 'Buy 1 Get !',
            title: 'Dignostics',
            disc2: 'By 1 Get 1 Free On',
            massage: 'Lab Package with a Subscription Charges Of Rs.99/-',
            img: 'https://www.portea.com/static/e563789d1b9bef587fbc9ced6542438c/61e93/family.webp'
        },
        {
            id: 3,
            dics: '100 Off',
            title: 'Doctor Visit',
            disc2: 'Flat Rs.100/- Off',
            massage: 'On Doctor Consultation',
            img: 'https://www.portea.com/static/26a627f248c079dbf6da0fd0ec75b011/1a890/doctor_consultation_offer.webp'
        },
    ]

    const obj2 = [
        {
            id: 1,
            icon: 'https://www.portea.com/static/3b475b69f2ccb90289f8b680d7b2fd91/7d09c/ico-1.webp',
            title: 'India Leading',
            massage: 'Home Helth Care Company'
        },
        {
            id: 2,
            icon: 'https://www.portea.com/static/c3a4bd6e3de86261a0da8de7a780a21f/7d09c/ico-2.webp',
            title: '63',
            massage: 'Top Hospital Patnership'
        },
        {
            id: 3,
            icon: 'https://www.portea.com/static/c3a4bd6e3de86261a0da8de7a780a21f/7d09c/ico-2.webp',
            title: '7000+',
            massage: 'Annual Patient Visit across India'
        },
        {
            id: 4,
            icon: 'https://www.portea.com/static/eb4af6cc17561b510a4dd14bf6663508/7d09c/ico-4.webp',
            title: '10,00,000',
            massage: 'Patient Served Successfully'
        },
    ]
    return (
        <div className='flex flex-col items-center justify-center mt-12'>


            <div className='lg:w-[80%]'>
                <h1 className='text-center font-Montserrat font-bold text-3xl py-12'>New Offer</h1>

                <div className='grid gap-2 p-2 lg:grid-cols-3 '>
                    {
                        obj.map((item, i) => (
                            <div key={i} className='flex justify-between border shadow-md rounded-lg' style={{ background: ['#CDF0EA', '#CDF0EA', '#FEEAEA'][i] }}>
                                <div className='py-6 p-4 xl:px-9 space-y-3 w-[70%]'>
                                    <button className='rounded-lg font-poppins text-xs p-1 px-3' style={{ background: ['#15D3BD', '#c490e4', 'orange'][i] }}>{item.dics}</button>
                                    <h1 className='font-Montserrat font-bold text-xl'>{item.title}</h1>
                                    <div>
                                        <h1 className='text-sm font-poppins font-semibold'>{item.disc2}</h1>
                                        <p className='text-sm font-poppins font-light'> {item.massage} </p>
                                    </div>
                                    <div>
                                        <button className='bg-orange-500 text-xs p-1 font-Montserrat px-4 text-white rounded-lg'>Book Now</button>
                                        <p className='ml-1 text-[8px] font-poppins'>T & C Apply</p>

                                    </div>
                                </div>
                                <div className='w-[30%] flex justify-end items-end h-full '>
                                    <img src={item.img} className='h-44' alt="" />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>


            <div className='bg-[#f5fbfb]  flex flex-col justify-center items-center p-12 font mt-12 w-full'>
                <div className=' grid lg:grid-cols-4 w-[90%]  gap-4'>
                    {
                        obj2.map((item, i) => (
                            <div className='bg-white shadow-lg rounded-2xl h-52 flex flex-col justify-center gap-4 items-center px-12 py-44 text-center'>
                                <img src={item.icon} className='h-12' alt="" />
                                <h1 className='text-xl font-poppins font-semibold'>{item.title}</h1>
                                <p className='text-lg font-Montserrat'>{item.massage}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewOffer
