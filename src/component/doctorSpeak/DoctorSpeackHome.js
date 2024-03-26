import React from 'react'

function DoctorSpeackHome() {
    const doctorObj = [
        {
            id:1,
            name:'Dr. Praveen Gupta',
            degree:'MBBS, MD, DM (Neurology)',
            img:'https://www.portea.com/static/2c678662bb02cc34c5eeca297207e8e4/9d183/Dr.-Praveen-Gupta1.jpg',
            speciality:'Good rewarding results in patient under home healthcare',
            summary:'Portea has provided good rewarding results in patient under home healthcare, especially for long term critically ill patients requiring ICU setups with or without ventilator support.  <br /> They have been an excellent bridge between the patients and the treating doctors for complete medical care at ',
        },
        {
            id:2,
            name:'Dr. B.K. Rana',
            degree:'----',
            img:'https://www.portea.com/static/8603ebf508aae818528960008e3bebd0/9d183/Dr.-B-k-Rana.jpg',
            speciality:'Portea Medical is the first Home Care organization in India to receive QAI accreditation',
            summary:'I would like to convey that Portea Medical Head Office in Bengaluru and operations in Delhi and Chennai were granted accreditation for a three-year cycle (21 November 2019 until 20 November 2022) vide certificate number AI/CAHSC/HHC/2019/0004 in accordance with the QAI Accreditation Standards for H...',
        },
        {
            id:3,
            name:'Dr. Sai Kiran Chaudhuri',
            degree:'MBBS, MD (Respiratory Medicine), TDD',
            img:'https://www.portea.com/static/590df9d41a5912671f83f3d2df530ee7/9d183/Dr.-Sai-Kiran-Chaudhuri.jpg',
            speciality:'Portea with their Cardiopulmonary Rehabilitation program under dynamic leadership',
            summary:'Portea, as a home health care has given me intense pleasure and satisfaction for patients on ventilator. I have been happy to have prolonged patient’s lives with some disability through home ventilation.  Portea with their Cardiopulmonary Rehabilitation program under dynamic leadership of Dr Sanjai',
        },
        {
            id:4,
            name:'Dr. Rajul Agarwal',
            degree:'MBBS, MD (Medicine), DM (Neurology)',
            img:'https://www.portea.com/static/121ecc058922695b6a5464d921a5d47d/9d183/Dr.-Rajul-Agarwal.jpg',
            speciality:'Portea are medically monitored, outcome based and economically affordable',
            summary:'Chronic Disease Management requires excellent post hospital care and timely interventions to achieve maximum possible recovery from existing medical issues, especially neurological disorders and/or with some disabilities. Portea home healthcare is doing this wonderfully in this direction and making...',
        },
        {
            id:5,
            name:'Dr. Vikas Dua',
            degree:'MBBS, MD (Paediatrics), FNB (Paediatrics Hemato-oncology)',
            img:'https://www.portea.com/static/36f163e507ba9c86a3207df5302045b8/9d183/Dr.-Vikas-Dua.jpg',
            speciality:'Portea is one of the finest home healthcare service provider with end to end medical oversight  ',
            summary:'Home Care services are the need of the hour in the current medial system, especially the Covid-19 pandemic would not have been managed without the support of home healthcare services. Portea is one of the finest home healthcare service provider with end to end medical oversight. Patients suffering',
        },
        {
            id:6,
            name:'Dr Renu Raina Sehgal',
            degree:'MBBS, DNB (Obstetrics & Gynaecology), MNAMS, FMAS, CIMP, Fellowship in Advanced Gynaecological Endoscopy, Fellowship in Robotic Surgery',
            img:'https://www.portea.com/static/cf8559a3975d192624c8536a764b05b3/9d183/Renu-Raina-Sehgal-1.jpg',
            speciality:'I cannot forget the great work Portea did during the Covid-19',
            summary:'My patients have been using services of Portea for years now: nursing, mother & baby care (for my obstetrics patients), attendant services, rehab, infusions, breast pump and other equipment rentals. I cannot forget the great work Portea did during the Covid-19 (especially the second wave) pande...',
        },
    ]
  return (
    <div className='p-5 lg:px-24 xl:w-[80%] '>

        <div>
            <h1 className='text-xl font-bold font-Montserrat'> Doctor Speak</h1>

            <div className='grid gap-12 py-6'>
                {
                    doctorObj.map((item)=>(
                        <div key={item.id} className='space-y-3'>
                            <div className='flex items-center'>
                                <img src={item.img} className=' h-20 rounded-[100%]' alt="doctor" />
                                <div>
                                    <h1 className='font-poppins text-[#00979e] font-bold'>{item.name}</h1>
                                    <p className='font-poppins text-sm'>{item.degree}</p>
                                </div>
                            </div>

                            <h1 className='font-bold font-Montserrat text-[#00979e]'>{item.speciality}</h1>
                            <p className='font-poppins text-justify'>{item.summary}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default DoctorSpeackHome
