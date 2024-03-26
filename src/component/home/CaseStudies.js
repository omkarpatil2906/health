import React from 'react'
import Carousel from 'react-grid-carousel'

function CaseStudies() {
    const caseStudyData = [
        {
            id: 1,
            img: 'https://www.portea.com/static/1-3f020b31dcc4641bdc3bbb90d648370e.png',
            date: '21  July',
            case: 'Diagnosis with Covid-19',
            summary: 'This 75 year old, female patient was diagnosed with Covid-19, and admitted in this multi-special....'
        },
        {
            id: 2,
            img: 'https://www.portea.com/static/2-c4239c848b88bb4e333d11dc6aeb7fd6.png',
            date: '07 June',
            case: 'Diagnosed with Acute Demyelinating Encephalop....',
            summary: 'This 32 year old, female patient diagnosed with acute demyelinating encephalopathy and seizure d....'
        },
        {
            id: 3,
            img: 'https://www.portea.com/static/3-8548448c720264dd050a482e1a1f3d8c.png',
            date: '10 April',
            case: 'Case of Lung Cancer',
            summary: 'This 63 year old, male patient, hailing from Bangladesh, a case of lung cancer with mets, was ad....'
        },
        {
            id: 4,
            img: 'https://www.portea.com/static/4-c92de5edc8cc991bdf3b9d2346fec378.png',
            date: '16 Jun',
            case: 'ICU Setup At Home With Efficient Nursing And ....',
            summary: 'This 77 year old, female patient was diagnosed of having pneumonia with recurrent urosepsis was ....'
        },
        {
            id: 5,
            img: 'https://www.portea.com/static/5-b5a489af911e5a71ea3dafb145c650b9.png',
            date: '13 May',
            case: 'Having Viral Pneumonia with Severe ARDS, CKD',
            summary: 'This 63 year old, male patient was diagnosed of having viral pneumonia with severe ARDS (Acute r....'
        },
        {
            id: 6,
            img: 'https://www.portea.com/static/6-d6508ccd1a3a799788b4856b2fcbca29.png',
            date: '17 Jan',
            case: 'Seizures Leading to Neurological Issues',
            summary: 'This 85 year old, male patient had a fall, followed by seizures leading to neurological issues r....'
        },
        {
            id: 7,
            img: 'https://www.portea.com/static/7-d71ef8bb37d004743b4dd529d891ef4f.png',
            date: '29 Aug',
            case: 'Diagnosed case of Post covid Lung fibrosis an....',
            summary: 'This 33 year old, female patient, which is a diagnosed case of Post covid Lung fibrosis and Resp....'
        },
        {
            id: 8,
            img: 'https://www.portea.com/static/8-907de5db0b3bf3f769a9c1a2f643ef7f.png',
            date: '20 Sept',
            case: 'Post covid Lung fibrosis and Respiratory seps....',
            summary: 'This 33 year old, male patient was diagnosed with Post covid Lung fibrosis and Respiratory sepsi....'
        },
        {
            id: 9,
            img: 'https://www.portea.com/static/9-1e62890dced761fdc033af79d8000cda.png',
            date: '19 July',
            case: 'How Continuous & Timely Medical Assessments H....',
            summary: 'This 40 year old, male patient was diagnosed with Post Covid Lung fibrosis. With OSA (Obstructiv....'
        },
        {
            id: 10,
            img: 'https://www.portea.com/static/10-12426a66a482b4793717c870d7e8a891.png',
            date: '28 Sec',
            case: 'A Tracheostomy Patient’s Journey From Critica....',
            summary: 'This 67 year old, female patient admitted in this multi-specialty hospital in Bengaluru was diag....'
        },
    ]
    return (
        <div className='py-12'>


            <div>
                <h1 className='text-2xl text-center font-Montserrat font-extrabold' >Case Studies</h1>
                <div className='lg:w-[80%] mx-auto h-full p-5'>
                    <Carousel cols={3} rows={1} mobileBreakpoint={300}>
                        {caseStudyData.map((item, i) => (
                            <Carousel.Item key={i}>
                                <div className='border h-96 xl:h-[430px]'>
                                    <img src={item.img} alt="" />
                                    <h2 className='text-center bg-[#009aa0] text-white font-bold  -mt-10 p-2 font-poppins relative w-16 z-10'>{item.date}</h2>
                                    <div className='p-3 space-y-3'>
                                        <h2 className='text-lg font-Montserrat font-bold'>{item.case}</h2>
                                        <p className='text-xs font-poppins'>{item.summary}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default CaseStudies
