import React, { useRef, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import BookNow from '../book/BookNow';

function MedicalService() {
    const [showAll, setShowAll] = useState(false);
    const scrollRef = useRef(null);


    
    const obj = [
        {
            id: 1,
            Image: 'https://www.portea.com/static/critical_care-4b14f79fa50630b8d586dc45858cf588.webp',
            titile: 'Critical Care'
        },
        {
            id: 2,
            Image: 'https://www.portea.com/static/diabetes_care-45f05050b4edea076ddc690b7d134a3f.webp',
            titile: 'Diabetes Care'
        },
        {
            id: 3,
            Image: 'https://www.portea.com/static/elder_care-5181e34ee605662109fbec41be35f3a8.png',
            titile: 'Elder Care'
        },
        {
            id: 4,
            Image: 'https://www.portea.com/static/physiotherapy-c897a9f211bf71dce7452f6d086e776f.webp',
            titile: 'Physiotherapy'
        },
        {
            id: 5,
            Image: 'https://www.portea.com/static/medical_equipment-ff3c765ededdd6e68dbbbf9432cbba97.webp',
            titile: 'Medical Equipment'
        },
        {
            id: 6,
            Image: 'https://www.portea.com/static/lab_tests-d58d70e0806b8a5540427044402b7883.webp',
            titile: 'Lab Tests'
        },
        {
            id: 7,
            Image: 'https://www.portea.com/static/nursing-4331c718cc53c0c8f2097eec1711f713.png',
            titile: 'Nursing Care'
        },
        {
            id: 8,
            Image: 'https://www.portea.com/static/trained-cc62b088a9a97515c23b5afb1039cbbf.png',
            titile: 'Trained Attendants'
        },
        {
            id: 9,
            Image: 'https://www.portea.com/static/baby-21aa76a2dbb1d3990662a6d1119266c8.png',
            titile: 'Mother & Baby Care'
        },
        {
            id: 10,
            Image: 'https://www.portea.com/static/doctor_consultation-7dd926b7b251ec3695eeafacecbcf91f.png',
            titile: 'Doctor Consultation'
        },
        {
            id: 11,
            Image: 'https://www.portea.com/static/nutrition-9ae94a250e356fba68227b48ba45fa10.png',
            titile: 'Nutrition & Diet Consultation'
        },
        {
            id: 12,
            Image: 'https://www.portea.com/static/tele-69d73e3c5c3679714eb524d30d7916ee.png',
            titile: 'Counselling'
        },
    ]

    const visibleItems = showAll ? obj : obj.slice(0, 6);

    const toggleShowAll = () => {
        setShowAll(!showAll);

        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={scrollRef} className='flex flex-col items-center justify-center mt-12 py-5 bg-[#f5fbfb]'>
            <div className='w-full lg:w-[80%]'>
                <h1 className='text-center text-3xl font-semibold p-2 font-Montserrat'>
                    Medical Services Offered At Home
                </h1>
                <p className='text-lg text-center p-2 font-poppins'>
                    Portea Medical offers a Variety of healthcare services in the comfort of our patient’s homes including:
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center p-5 '>
                    {visibleItems.map((item) => (
                        <div key={item.id} className='border grid grid-cols-2 justify-between items-center shadow-lg bg-white rounded-lg xl:w-[90%] xl:h-52'  data-aos="zoom-in" data-aos-duration="500" data-aos-delay={250 * item.id} >
                            <div className='w-[100%] space-y-7 pl-5 font-bold'>
                                <h1 className='text-2xl xl:text-xl font-poppins'>{item.titile}</h1>
                                <button className='text-xl lg:text-lg text-orange-600 font-Montserrat'><BookNow/></button>
                            </div>
                            <div className='w-[100%] flex justify-end items-end h-full '>
                                <img src={item.Image} className='h-44 object-cover' alt='' />
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center mt-5 py-12'>
                    <button onClick={toggleShowAll} className='bg-white text-orange-500 text-xl font-Montserrat font-bold py-2 px-4  gap-4  flex items-center rounded-lg'>
                        {showAll ? <> View Less <FaChevronUp className='m-2' /> </> : <>View More<FaChevronDown className='mr-2' /> </>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MedicalService
