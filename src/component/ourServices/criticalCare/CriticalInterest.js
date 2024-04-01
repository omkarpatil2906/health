import React from 'react'
import CriticalCareTable from './CriticalCareTable'

function CriticalInterest() {
    const obj = [
        {
            id: 1,
            img: 'https://www.portea.com/static/027762dfc5ac2860e1ad425d760576e7/8f3cf/Nursing-in-City-small.png',
            title: 'Home Nursing Services',
        },
        {
            id: 2,
            img: 'https://www.portea.com/static/027762dfc5ac2860e1ad425d760576e7/8f3cf/Nursing-in-City-small.png',
            title: 'Long Term Nursing Care',
        },
        {
            id: 3,
            img: 'https://www.portea.com/static/034848a438572db3c3e9e47a9162365b/8f3cf/ICU-respiratory-service-small.png',
            title: 'Nurse For Icu Care At Home',
        },
        {
            id: 4,
            img: 'https://www.portea.com/static/034848a438572db3c3e9e47a9162365b/8f3cf/ICU-respiratory-service-small.png',
            title: 'Nursing Service For Respiratory Care',
        },
        {
            id: 5,
            img: 'https://www.portea.com/static/100592d49fbcd890af7c20604d1525f5/03531/devon.jpg',
            title: 'Dvt- Deep Vein Thrombosis Pump',
        },

    ]
    return (
        <div className='p-5 space-y-12'>


            <div className='grid sm:grid-cols-2  lg:grid-cols-5 gap-5 w-[90%] mx-auto py-12'>
                {obj.map((item) => (
                    <div key={item.id} className='border'>
                        <img src={item.img} alt="" />
                        <h2 className='p-3 font-poppins'>{item.title}</h2>
                        <button className='px-3 font-Montserrat underline text-[#009aa0]'>KNOW MORE</button>
                    </div>
                ))}
            </div>


            <div className='lg:flex lg:p-12 '>
                <div className='lg:w-[70%]  space-y-12'>

                    <div className='space-y-5'>
                        <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'> Critical / Intensive Care At Home</h1>

                        <p className='font-poppins text-[#616f6f]'>
                            Home is where healing happens best. Portea ICU at Home services are for Patients who are no longer in the acute phase of their illness but still require intensive care. <br /> <br />

                            Critical Care at Home services includes the care and supervision of highly trained critical care therapists, experts and nurses and at a significantly lower price than that of a hospital stay. <br />

                            Our clinical procedures have been developed in consultation with leading hospitals and renowned experts, ensuring the highest quality medical care. Six ways in which we make critical home care a great choice for the patient and her family. <br /> <br />
                        </p>
                    </div>

                    <div className='space-y-5'>
                        <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>When Do You Need Critical Care?</h1>

                        <p className='font-poppins text-[#616f6f]'>
                            When a family member needs long term ICU care, a lot of doctors and hospitals advise for such care to be provided at home if possible, in case there are no active interventions to be done. <br /> <br />

                            The patient is happier at home and healing can happen at home  in the familiar environment of the home, without the threat of hospital-acquired infections. This is financially easier for the family as well considering such care at home comes at least 30% cheaper than in a hospital. So you do not have to think about long expensive bills. <br /> <br />

                            We at Portea have provided icu home care services to a lot of patients with respiratory or neurological diseases who take a long time to recover and need adequate device support and specialized care through trained nurses. The recovery results for these patients have been great. Know more here. <br /> <br />
                        </p>
                    </div>


                    <h1 className='font-bold text-xl text-[#616f6f] font-Montserrat'>HOW ICU SETUP WORKS AT HOME?</h1>
                    <p className='font-poppins text-[#616f6f]'>At Portea, we are pioneers in delivering comprehensive ICU care at home. Our ICU setup at home will include the following:</p>
                    <ul className='list-disc list-inside marker:text-[#616f6f] px-3 text-[#616f6f] space-y-4 font-poppins'>
                        <li> <span className='font-bold'>Medical Equipment: </span>Setting up an ICU at home will require all the essential medical equipment to deliver critical care services to the patients. The equipment will depend on the specific needs of the patients. Some of the common equipment used include infusion pumps, BiPAP, DVT pumps, and other equipment as per the assessment done by the doctors of Portea. </li>
                        <li> <span className='font-bold'>Bed Sore Management:</span>Our ICU setup at home ensures effective bedsore management. We choose the right type of bed to allow the patients to rest conveniently and lower the chances of bed sores. </li>
                        <li> <span className='font-bold'>Critical Care Nurse:</span>Nursing is a vital aspect of critical care at home. We assign qualified critical care nurses for patients availing of ICU services at home. They will be responsible for administering injections, giving the right medicines to the patients from time to time, keeping track of progress, and submitting home visit reports. Portea offers E-monitoring services and helps healthcare professionals and patients to stay connected all the time.</li>
                    </ul> <br />


                    <h1 className='font-bold text-xl text-[#616f6f] font-Montserrat'>HOW PORTEA HELPS INSTALL THE ICU SETUP AT YOUR HOME?</h1>
                    <p className='font-poppins text-[#616f6f]'>Portea has a team of experienced professionals who know the right way to set up an ICU at home. We evaluate the available space in the patient’s home, understand their unique requirements, and accordingly set up the ICU. We provide seamless support to our patients round the clock and meet all their emergency care needs. </p>


                    <div className='space-y-5'>
                        <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>At Home Critical Care Packages</h1>

                        <p className='font-poppins text-[#616f6f]'>
                            Care plans are personalized for patient needs and are designed to deliver high quality, affordable, and easy to implement health services.
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='font-bold text-xl text-[#616f6f] font-Montserrat'>CRITICAL PACKAGE FOR CRITICAL HOME CARE</h1>

                        <h1 className='font-bold text-xl  font-Montserrat'>Clinical team</h1>

                        <ul className='list-disc list-inside marker:text-[#616f6f] px-3 text-[#616f6f] space-y-4 font-poppins'>
                            <li>2 ICU trained nurses – 12 hours each (24 Hours Nursing Service)</li>
                            <li>2 Nursing assistants – 12 hours each (24 Hours Nursing Attendant/Caretaker Service)</li>
                            <li>Physiotherapist (as advised by primary physician)</li>
                            <li>Respiratory therapist (1-2 visits/week)</li>
                            <li>ICU consumables</li>
                            <li>Weekly clinical quality audits</li>
                        </ul> <br />

                    </div>
                </div>
                <div className='lg:w-[30%]'>

                <CriticalCareTable />
                </div>
            </div>

        </div>
    )
}

export default CriticalInterest
