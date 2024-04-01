import React from 'react'
import CovidTable from './CovidTable'

function CovideHome() {
  return (
    <div className='p-7 lg:px-12'>



      <div className=' lg:flex'>
        <div className=' lg:w-[70%] space-y-12 text-justify'>
          <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>Portea Covid Care Solutions</h1>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 '>

            <div className='grid sm:col-span-2 md:col-span-1 lg:w-[76%]'>
              <img src="https://www.portea.com/static/787bd471fa92bc268d007fa17dfb5b8b/5fd98/Portea-COVID-Home-Isolation-vector.webp" className='mx-auto' alt="" />

              <h1 className='font-poppins font-medium'><span className='underline font-bold'>Home Isolation </span> - Management of Home Isolation Care Patients</h1>
              <p className='text-[#009aa0] underline'>Click Here to Know More</p>
            </div>

            <div className='grid sm:col-span-1  lg:w-[76%]'>
              <img src="https://www.portea.com/static/f860bd6af526c83255bf7d130a0f1100/1999a/Portea-COVID-ARMOUR-vector.webp" className='mx-auto' alt="" />

              <h1 className='font-poppins font-medium '><span className='underline font-bold'>COVID Armour</span> - Protect Your Community from COVID</h1>
              <p className='text-[#009aa0] underline'>Click Here to Know More</p>
            </div>

            <div className='grid sm:col-span-1  lg:w-[76%]'>
              <img src="https://www.portea.com/static/32f8646adee3b4853a2d0d60117e9488/bba37/Portea-COVID-Test-vector.webp" className='mx-auto' alt="" />

              <h1 className='font-poppins font-medium'><span className='underline font-bold'>COVID Testing</span> - Tested for COVID at the Safety of Your Home</h1>
              <p className='text-[#009aa0] underline'>Click Here to Know More</p>
            </div>

          </div>


          <div className='space-y-5'>
            <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>What Is Coronavirus?</h1>

            <p className='font-poppins text-[#616f6f]'>
              Coronaviruses are a group of viruses or family of viruses that range from the common cold to MERS (Middle East Respiratory Syndrome coronavirus) and SARs (Severe acute respiratory syndrome coronavirus). Coronaviruses circulate in animals and few of them have the capability of transmitting between animals and humans.
            </p>

          </div>

          <div className='space-y-5'>
            <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>What Is Coronavirus, Covid-19</h1>

            <p className='font-poppins text-[#616f6f]'>
              Coronavirus disease 2019 (COVID-19) is an infectious disease which is caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It is a virus closely linked to the SARS virus. It was earlier known by the provisional name 2019 novel coronavirus (2019-nCoV). The disease was first reported in Wuhan, China.
            </p>

          </div>


          <div className='space-y-5'>

            <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>Epidemiology</h1>

            <p className='font-poppins text-[#616f6f]'>
              During December 2019, the health authorities in Wuhan, Hubei Province, China observed a cluster of pneumonia cases of unknown cause. The first few cases had connects  to the Huanan Seafood Wholesale Market and therefore, the virus is thought to be of zoonotic origin, The new virus that has caused the outbreak is known as SARS-CoV-2. It is believed to be closely related to bat coronaviruses, pangolin coronaviruses, and SARS-CoV.
            </p>
          </div>



          <div className='space-y-5'>

            <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>How Does Covid-19 Spread</h1>
            <h2 className='font-poppins text-[#616f6f] font-bold'>{"A)"} PEOPLE TO PEOPLE CONTACT:</h2>
            <p className='font-poppins text-[#616f6f]'>
              The virus is believed to spread mainly from one person to another. It generally spreads between people who are in close contact (6 feet or lesser) with each other. When the infected person sneezes, the respiratory droplets produced enter the mouths or noses of nearby people and can get inhaled into the lungs.  <br />

              People who are at the sickest level (most symptomatic level) are thought to be most contagious. <br />

              Although it may also be possible for people to be contagious before they show any symptoms.
            </p>
            <h2 className='font-poppins text-[#616f6f] font-bold'>{"B)"}  CONTACT WITH CONTAMINATED OBJECTS OR SURFACES:</h2>
            <p className='font-poppins text-[#616f6f]'>
              It may also be possible that a person can get COVID-19 if he/she touches a contaminated surface or object that has the virus on it and then touches their own nose,  mouth or eyes. Although this is not thought to be the main way the virus spreads

            </p>
          </div>


          <div className='space-y-5'>

            <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'>Steps To Prevent Illness</h1>

            <p className='font-poppins text-[#616f6f]'>
            Currently there is no vaccine to prevent coronavirus disease 2019 (COVID-19). The most recommended way to prevent illness is to avoid getting exposed to this virus.
            </p>

            <p className='font-poppins text-lg '>{"1)"}IMPORTANT STEPS TO PROTECT YOURSELF</p>
            <p className='font-poppins text-[#616f6f]'>
            If you are already infected with COVID-19 or suspect that you or someone in your family is infected, follow the below mentioned steps to help prevent the disease from spreading to other people.
            </p>
                <ul className='list-disc px-3 list-inside marker:text-[#616f6f] space-y-4 font-poppins text-[#616f6f]'>
                    <li> <span className='font-bold'>Wash and clean your hands often</span>: Wash your hands with soap and water for a minimum 20 seconds after you have been in a public place, or after coughing, sneezing or blowing your nose. If soap is not readily available, you may use a hand sanitizer that has at least 60% alcohol. Do not touch your nose, mouth and eyes with unwashed hands.</li>
                    <li> <span className='font-bold'>Avoid close contact with people who are sick</span>If COVID-19 is spreading in your region or community, keep distance between yourself and other people. This is even more important for people who are aged or at higher risk of getting sick.</li>
                    <li><span className='font-bold'>Stay home if you’re sick</span> If you are sick, stay at home, except to get medical care. In the next section we will explain what to do if you are sick.</li>
                   
                </ul> <br />


                <p className='font-poppins text-lg '>{"2)"} STEPS TO PREVENT THE SPREAD OF COVID-19 IF YOU ARE SICK OR SOMEONE IN YOUR HOME IS INFECTED</p>
                <ul className='list-decimal px-3 list-inside marker:text-[#616f6f] space-y-4 font-poppins text-[#616f6f]'>
                   <li>Stay home except to get medical care : People who show mild symptoms of COVID-19 are recommended to get isolated at home during their illness, except for getting medical care. Do not go to public areas, work or school and avoid using public transportation.</li>
                   <li>Stay away from other people: Separate yourself as much as possible, you must stay in a specific room and away from other people in your home. It is also advisable that you use a separate bathroom, if it’s there.</li>
                   <li>Limit contact with pets: While you are sick with COVID-19, you must restrict contact with pets and other animals. Although there have been no reports of animals getting sick with COVID-19, it is still advisable that people infected with COVID-19 do not touch pets and other animals till more information is known about the virus.</li>
                   <li>Call before visiting your doctor: If you already have an appointment with the doctor, call and tell them that you have or may have COVID-19. This is very important and will surely help the healthcare provider to take steps to keep other people from getting exposed.</li>
                   <li>Wear a facemask if you are infected: The sick person must wear a facemask when he/she is around other people or pets and before they enter a hospital or clinic. If the sick person is not able to wear a facemask because of breathing issues or some other problem, then people who live in the same house should not stay in the same room, and they should wear a facemask if they have to enter a room of the sick person.</li>
                   <li>Cover your sneezes and coughs: When you cough or sneeze, cover your mouth and nose with a tissue. Then throw the used tissues in a lined dustbin.</li>
                   <li>Do not share personal household items: You must not share drinking glasses, cups, utensils, towels, or bedding with any other person or pets in your house. After using household items, wash them thoroughly with soap and water.</li>
                   <li>Clean and disinfect all “high-touch” surfaces everyday: You must clean high touch surfaces like tabletops,  bathroom fixtures, doorknobs, desktop keyboards, phones and bedside tables. Also, clean any surfaces that may have body fluids on them.</li>
                   
                </ul> <br />
          </div>

        </div>
        <div className='lg:w-[30%]'>
          <CovidTable />
        </div>
      </div>
    </div>
  )
}

export default CovideHome
