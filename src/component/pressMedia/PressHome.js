import React from 'react'

function PressHome() {

    const pressObj = [
        {
            id:1,
            img:'https://www.portea.com/static/19602d0f870cc668b24107bb8584ada0/7ba55/pm-lg-livemint.jpg',
            budget:'Budget 2023: What healthcare is looking forward to',
            summary:'Meena Ganesh, Co-Founder & Chairperson of Portea Medical, in an article shared her views on the Union Budget 2023 with Mint. She mentioned COVID-19 had been an eye-opener for India’s healthcare sector. There is a need for infrastructure and human medical resources to plug the coverage gap by increasing the budgetary allocation.'
        },
        {
            id:2,
            img:'https://www.portea.com/static/06f85c28f4256531bd23b83d2b665177/77a1e/biovoice_logo.png',
            budget:'Budget 2023 Expectations: Industry seeks incentives, tax rebates, funds for infrastructure & R&D',
            summary:'Our CEO and Co-Founder, Mr. Vaibhav Tewari, has penned an article for BioVoice on Union Budget 2023 and expectations of the stakeholders to help fuel innovation and R&D, which will set the pace for propelling the pharmaceutical industry forward. He also addressed the specific demands of the stakeholders on GST, better incentives and more PLI schemes for various segments of the sector.'
        },
        {
            id:3,
            img:'https://www.portea.com/static/19602d0f870cc668b24107bb8584ada0/7ba55/pm-lg-livemint.jpg',
            budget:'udget 2023 expectations: Time to upgrade healthcare facility and boost funding',
            summary:'Meena Ganesh, Co-founder & Chairperson of Portea Medical, has penned an article for Mint. She discussed the Budget 2023 expectations, the need to upgrade the healthcare facility, and boost funding. The Union Budget 2023-24 is expected to be a significant step in determining the future trajectory of healthcare improvement and capacity expansion in India.'
        },
        {
            id:4,
            img:'https://www.portea.com/static/7c2c25fb474369868b58b3502063063a/7ba55/pm-lg-timesofindia.jpg',
            budget:'Budget 2023-24: ‘Govt must offer tax breaks to incentivise healthcare delivery in semi-urban, rural areas’',
            summary:'Meena Ganesh, Co-founder & Chairperson of Portea Medical, has penned an article for TOI on the upcoming Union Budget 2023-24 and mentioned why the government must offer tax breaks to incentivise healthcare delivery in semi-urban, rural areas and GST benefits to be laid out for institutional healthcare providers.'
        },
        {
            id:5,
            img:'https://www.portea.com/static/5d44df993bab2a7b590e…ba55/logo-Express-healthcare-2-e1581993175852.jpg',
            budget:'Cervical health awareness month: Bringing care closer to prevent and reduce the chances of cervical cancer',
            summary:'Dr. Vishal Sehgal, President of Portea Medical, penned an article for Express Healthcare that emphasized the need for an affordable and accessible vaccine to address the burden of cervical cancer in India. This can be done through mass awareness campaigns to remove vaccine-related myths and strengthen screening programs'
        },
        {
            id:6,
            img:'https://www.portea.com/static/b94f9ef647eb6265b13d7b9966bc0469/b4386/moneycontrol.png',
            budget:'Watch: Can Indian startups sustain their current pace of growth? India’s Unicorns weigh in',
            summary:'CEO and Co-Founder of Portea Medical Mr. Vaibhav Tewari, in conversation with Money Control and Citibank, discussed the journey, ambitions, and how startups are dealing with inflation, global events, and the current funding winter that’s affecting the startups around the world.'
        },
        {
            id:7,
            img:'https://www.portea.com/static/aab976530822b5b7aa04c7943303c5de/7ba55/pm-lg-et-healthworld.jpg',
            budget:'Union Budget 2023: Home Healthcare players seek tax incentives for industry to proliferate',
            summary:'Meena Ganesh, Co-founder & Chairperson of Portea Medical, has penned an article for ET Healthworld on ‘Expectations of the healthcare industry from the Union Budget 2023. She also discusses the need to boost India’s healthcare system to expand quality care nationwide.'
        },
        {
            id:8,
            img:'https://www.portea.com/static/bffc19e6437a1499aaea90e189468da4/6c838/logo-News18.png',
            budget:'Budget 2023 Expectations: Will Healthcare Industry Move Towards Digital Therapeutics?',
            summary:'Meena Ganesh, Co-founder & Chairperson of Portea Medical, speaks about the massive need for infrastructure and human medical resources, and mentioned, to plug the coverage gap by increasing the budgetary allocation and bring reforms like GST offset to promote digital therapeutics.'
        },
        {
            id:9,
            img:'https://www.portea.com/static/159d54ac134bc93ac803400bd4682c9f/6c838/BW-health-care.png',
            budget:'Out Of Hospital Care: An Emerging Opportunity',
            summary:'Meena Ganesh, Co-founder & Chairperson of Portea Medical, has penned an article for BW Healthcare on the ‘benefits of homecare, use of technology in home healthcare management as well as the significant cost savings it brings, which led to an exponential growth and change in out-of-hospital care.’'
        },
        {
            id:10,
            img:'https://www.portea.com/static/7c2c25fb474369868b58b3502063063a/7ba55/pm-lg-timesofindia.jpg',
            budget:'Shift to patient-centric care: Healthcare industry predictions for 2023',
            summary:'Meena Ganesh, Co-founder & Chairperson of Portea Medical, penned an article for Times Of India on ‘The digitization of healthcare industry as a result of recent drastic change in the field.’ She shared her views on reducing non-critical care burden to remote, home healthcare services, diagnostic accuracy, and access can be improved through wearables and digital devices.'
        },
        
    ]
  return (
    <div className='p-5 lg:px-24 xl:w-[80%] '>

        <div>
            <h1 className='font-Montserrat font-bold '>Portea In News</h1>


            <div className='space-y-12'>
                {pressObj.map((item)=>(
                    <div key={item.id} className='space-y-3'>
                        <img src={item.img} alt="" />
                        <h1 className='font-Montserrat  font-bold text-[#00979e]'>{item.budget}</h1>
                        <p className='font-poppins text-justify'>{item.summary}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default PressHome
