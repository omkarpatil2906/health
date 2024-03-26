import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function HappyCustomer() {
    const obj = [
        {
            id: 1,
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-circle-icon.png',
            name: 'Shama Sunder',
            massage: 'Counsellor Mary Fathimas explanation is excellent and the information shared is very useful, as most people do not know the test procedure (i.e. test timings and the difference) of the FBS, PPBS and RBS tests even though they are literate. I was also doing my FBS test at incorrect timings and didnt know the difference between PPBS and RBS  The inputs shared were very useful in helping me manage by diabetes better. '
        },
        {
            id: 2,
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-circle-icon.png',
            name: 'Zaka Nasi Shaik',
            massage: 'I have availed Portea Elder care service and would like to sincerely thank Health Manager Saba for being a single point of contact as it has made my life easier and simpler on arranging my appointments on time as required and Portea for giving such a good service.Saba is doing a great job and I have never felt the need to call anybody else for any services as she is always available on call even at an odd time. I would like to appreciate her for your prompt service as well as  for ensuring to arrange quality service with customer satisfaction '
        },
        {
            id: 3,
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
            name: 'T.E.Degaleesan',
            massage: 'Thank you for the gift given to us on your Customer Day celebration. We would like to record our appreciation for the services rendered by your staff Coordinator Ms Yasodha, Patient attendees Mr. Murugesan, have been very attentive to our needs and thanks for the services. '
        },
        {
            id: 4,
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
            name: 'Harendra Singh',
            massage: ' I am undergoing physiotherapy exercise sessions being conducted by Sri Vinay Chandra and very much satisfied and impressed with the services rendered by him. His dedication towards the patient problems and understanding is much appreciated. '
        },
        {
            id: 5,
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
            name: 'Kishan Maniyar',
            massage: 'It was a great experience with protea during my rehabilitation post my ACL reconstruction. Thanks to Dr.Hirak sir who brought me back to walking  ways from a condition where my recovery was a huge task. '
        },
        {
            id: 6,
            img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-circle-icon.png',
            name: 'Sucheta Govil',
            massage: 'My husband and I used to worry a lot, especially as we lived abroad, about my father in law who lived in Delhi and was suffering from Alzheimers which also put tremendous pressure on my mother in law as the primary carer. Portea, Meena, Yogesh and the team stepped in to provide invaluable day and night care. The attendants Ram and Akash were extrenely loving and caring and this made the situation so bearable. If anyone requires Porteas help for elder care, I would highly recommend them and am extremely grateful to the entire team. '
        }

    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },

    };

    const [currentIndex, setCurrentIndex] = useState(0); 

    const items = obj.map(item => (
        <div key={item.id} className='flex flex-col justify-center m-2 items-center py-12 space-y-6 lg:h-96 bg-[#f8fbfd]'>
            <img src={item.img} className='h-12' alt='' />
            <h1 className='font-Montserrat text-2xl font-bold text-[#4a4a4a]'>{item.name}</h1>
            <p className='font-poppins italic font-light text-justify px-3 text-[#4a4a4a]'>{item.massage}</p>
        </div>
    ));

    const handlePrevious = ({ isPrevious }) => {
        if (isPrevious) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNext = ({ isNext }) => {
        if (isNext) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='text-center py-12 space-y-2'>
                <h1 className='font-bold font-Montserrat text-3xl'>Happy Customer</h1>
                <p className='font-poppins'>
                    Don't simply consider our word for it, hear it from our happy customers what they have to say about their
                    experience with Portea.
                </p>
            </div>

            <div className='w-[80%]'>

                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableDotsControls
                    renderPrevButton={({ previous }) => (
                        <div className='flex justify-end'>
                            <MdKeyboardArrowLeft
                                className={`text-4xl ${
                                    currentIndex === 0 ? 'text-gray-400 ' : 'bg-black text-white rounded-full cursor-pointer'
                                }`}
                                onClick={() => currentIndex !== 0 && handlePrevious({ isPrevious: true })}
                            />
                        </div>
                    )}
                    renderNextButton={({ next }) => (
                        <div className='flex justify-start'>
                            <MdKeyboardArrowRight
                                className={`text-4xl ${
                                    currentIndex === obj.length - 1 ? 'text-gray-400 ' : 'bg-black text-white rounded-full cursor-pointer'
                                }`}
                                onClick={() => currentIndex !== obj.length - 1 && handleNext({ isNext: true })}
                            />
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default HappyCustomer;