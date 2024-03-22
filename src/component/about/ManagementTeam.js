import React from 'react'

function ManagementTeam() {
    const obj = [
        {
            id: 1,
            img: 'https://www.portea.com/static/e57bfa7ba650563aff5b47d485e8a766/f3dec/Meena2.png',
            name: 'Meena Ganesh',
            position: 'Co-founder and Chairperson'
        },
        {
            id: 2,
            img: 'https://www.portea.com/static/815ca244ec1ac1f99a2f555008b8890f/f3dec/Ganesh4.png',
            name: 'Ganesh Krishnan',
            position: 'Co-founder & Director'
        },
        {
            id: 3,
            img: 'https://www.portea.com/static/27729653ba5ff3cfb405ab7a1f0b36fd/f422e/V-Tiwari.jpg',
            name: 'Vaibhav Tewari',
            position: 'Co-founder & CEO'
        },
        {
            id: 4,
            img: 'https://www.portea.com/static/075d3f346063d4d0bdd20d1a13ba9e51/f422e/Ashwin-Kumar.jpg',
            name: 'K M Aswin Kumar',
            position: 'CFO'
        },
        {
            id: 5,
            img: 'https://www.portea.com/static/aec44bfd8197b9e2f958443d5fc2dd93/f422e/vishal-Sehgal.jpg',
            name: 'Dr. Vishal Sehgal',
            position: 'President'
        },
        {
            id: 6,
            img: 'https://www.portea.com/static/5e720544a16da0d7d6d14cee56ded5ed/f3dec/Rama-G.png',
            name: 'G. Ramasubramani',
            position: 'CTO'
        },
        {
            id: 7,
            img: 'https://www.portea.com/static/17279e61ad176d1489105b42886bc87d/f3dec/Surendar.png',
            name: 'Surendar Singh Chauhan',
            position: 'VP Operations - South'
        },
    ]


    const obj2 = [
        {
            id: 1,
            img: 'https://www.portea.com/static/aec44bfd8197b9e2f958443d5fc2dd93/f422e/vishal-Sehgal.jpg',
            name: 'Dr. Vishal Sehgal',
            position: 'President'
        },
        {
            id: 2,
            img: 'https://www.portea.com/static/ab0e7dc563933ce547c48fdf7c0ea554/4a838/Dr-Kavitha.S.-Manjunath-1.jpg',
            name: 'Dr. Kavitha S Manjunath',
            position: 'Clinical Head – Primary, Preventive & Elderly Care'
        },
        {
            id: 3,
            img: 'https://www.portea.com/static/99864b6a400fec6b673c3de858216444/f3dec/Dr-Sanjay-Bajpai.png',
            name: 'Dr Sanjay Bajpai',
            position: 'Clinical Head North & East'
        },
        {
            id: 4,
            img: 'https://www.portea.com/static/39f6413162e2ebb1be5d695a0ce4167c/4a838/IMG20220311152906__02.jpg',
            name: 'Dr Allia Rahaman',
            position: 'Clinical Head South'
        },
    ]


    const obj3 = [
        {
            id: 1,
            img: 'https://www.portea.com/static/cf8559a3975d192624c8536a764b05b3/4fe8c/Renu-Raina-Sehgal-1.jpg',
            name: 'Dr Renu Raina Sehgal',
            position: 'MBBS, DNB, MNAMS, FMAS, CIMP (Obstetrics and Gynaecology, & Gynae Oncology)'
        },
        {
            id: 2,
            img: 'https://www.portea.com/static/f1e0dd1be72544c0449dbaee41d1999b/ecf8c/Niti-raizada-1.jpg',
            name: 'Dr Niti Raizada',
            position: 'MBBS, MD, DNB, DM, ECMO, MRCP, EMPH (Medical & Haemato - Oncology)'
        },
        {
            id: 3,
            img: 'https://www.portea.com/static/f8d63d8f5916326a21660c039da7aefc/4a838/Dr.-Abhradip-Das-1-1.jpg',
            name: 'Dr. Abhradip Das',
            position: 'MBBS, MD, C. C. COPD, P.G.C. Diabetology (Pulmonology & Critical Care)'
        },
        {
            id: 4,
            img: 'https://www.portea.com/static/121ecc058922695b6a5464d921a5d47d/9ce40/Dr.-Rajul-Agarwal.jpg',
            name: 'Dr. Rajul Aggarwal',
            position: 'MBBS, MD, DM (Neurology & Neuro Critical Care)'
        },
        {
            id: 5,
            img: 'https://www.portea.com/static/d6edcf6f048e3c077005dfd7241fd9aa/9dc27/Dr.-Haseeb-Hassan-2.jpg',
            name: 'Dr. Haseeb Hassan',
            position: 'MBBS, MD, DM (Neurology)'
        },
        {
            id: 6,
            img: 'https://www.portea.com/static/7f33d6308d066fefd36e540b00db405d/9dc27/Dr-Saurabh-Maji.jpg',
            name: 'Dr Saurabh Maji',
            position: 'MBBS, DTCD, MD, DM (Pulmonology)'
        },
        {
            id: 7,
            img: 'https://www.portea.com/static/f2c1e21614b131ff4cecaec123e3f42e/34167/Ambanna-Gowda.png',
            name: 'Dr. Ambanna Gowda. D',
            position: 'M.B.B.S., M.D, PGDIP, Fellowship in Diabetes (Internal Medicine & Diabetes)'
        },
        {
            id: 8,
            img: 'https://www.portea.com/static/c969f3fafc185525140960cb4f199311/3ea03/Sagar-C.png',
            name: 'Dr Sagar C',
            position: 'MBBS, DNB (Pulmonology & Sleep Medicine)'
        },
        {
            id: 9,
            img: 'https://www.portea.com/static/2c678662bb02cc34c5eeca297207e8e4/9dc27/Dr.-Praveen-Gupta1.jpg',
            name: 'Dr. Praveen Gupta',
            position: 'MBBS, MD, DM (Neurology and Neuro Critical Care)'
        },
        {
            id: 10,
            img: 'https://www.portea.com/static/36f163e507ba9c86a3207df5302045b8/9dc27/Dr.-Vikas-Dua.jpg',
            name: 'Dr. Vikas Dua',
            position: 'MBBS, MD, FNB (Paediatric Hemato Oncology)'
        },
        {
            id: 11,
            img: 'https://www.portea.com/static/590df9d41a5912671f83f3d2df530ee7/9dc27/Dr.-Sai-Kiran-Chaudhuri.jpg',
            name: 'Dr. Sai Kiran Chaudhuri',
            position: 'MBBS, MD, TDD (Respiratory Critical Care)'
        },
        {
            id: 12,
            img: 'https://www.portea.com/static/f7586a912743727ced97d5345fc46f1c/e586d/Gangi-Reddy1.jpg',
            name: 'Dr. Gangi Reddy T K',
            position: 'MBBS, DNB Pulmonary Medicine (Pulmonology)'
        },
    ]
    return (
        <div className='flex justify-center'>

            <div className='xl:w-4/5 space-y-5'>
                <h1 className='px-4 font-poppins'>About Us</h1>
                <h2 className='font-bold text-5xl font-Montserrat border-s-4 px-2 border-orange-500'>Meet Our Team</h2>

                <h1 className='px-3  text-xl font-poppins'>Management Team</h1>

                <hr className='border-orange-500 mx-3 border-2 ' />

                <div className='grid lg:grid-cols-2 xl:grid-cols-3 px-3 gap-6 py-5'>
                    {obj.map((item) => (
                        <div key={item.id} className='shadow-md  bg-[#fafafa]'>
                            <img src={item.img} className='h-96 w-[700px] ' style={{ objectFit: 'cover', objectPosition: 'top' }} alt="" />
                            <div className='p-5'>

                                <h1 className='text-xl font-Montserrat font-bold'>{item.name}</h1>
                                <p className='text-sm font-poppins'>{item.position}</p>
                            </div>
                        </div>
                    ))}

                </div>

                <h1 className='px-3  text-xl font-poppins'>Medical Team</h1>

                <hr className='border-orange-500 mx-3 border-2 ' />

                <div className='grid lg:grid-cols-2 xl:grid-cols-3 px-3 gap-6 py-5'>
                    {obj2.map((item) => (
                        <div key={item.id} className='shadow-md  bg-[#fafafa]'>
                            <img src={item.img} className='h-96 w-[700px] ' style={{ objectFit: 'cover', objectPosition: 'top' }} alt="" />
                            <div className='p-5'>

                                <h1 className='text-xl font-Montserrat font-bold'>{item.name}</h1>
                                <p className='text-sm font-poppins'>{item.position}</p>
                            </div>
                        </div>
                    ))}

                </div>


                <h1 className='px-3  text-xl font-poppins'>Advisory Panel</h1>

                <hr className='border-orange-500 mx-3 border-2 ' />

                <div className='grid lg:grid-cols-2 xl:grid-cols-3 px-3 gap-6 py-5'>
                    {obj3.map((item) => (
                        <div key={item.id} className='shadow-md  bg-[#fafafa]'>
                            <img src={item.img} className='h-96 w-[700px] ' style={{ objectFit: 'cover', objectPosition: 'top' }} alt="" />
                            <div className='p-5'>

                                <h1 className='text-xl font-Montserrat font-bold'>{item.name}</h1>
                                <p className='text-sm font-poppins'>{item.position}</p>
                            </div>
                        </div>
                    ))}

                </div>





            </div>
        </div>
    )
}

export default ManagementTeam
