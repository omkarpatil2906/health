import React from 'react'

function TrainedService() {

    const dataObj = ['Trained Attendant in Asansol', 'Trained Attendant in Bangalore', 'Trained Attendant in Chandigarh','Trained Attendant in Chennai', 'Trained Attendant in Delhi-NCR', 'Trained Attendant in Durgapur','Trained Attendant in Hyderabad', 'Trained Attendant in Indore', 'Trained Attendant in Jaipur','Trained Attendant in Kolkata', 'Trained Attendant in Ludhiana', 'Trained Attendant in Mumbai', 'Trained Attendant in Nagpur','Trained Attendant in Pune','Trained Attendant in Salem','Trained Attendant in Vizag',] 
    return (
        <div className='p-5 space-y-3 text-justify'>
            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> What Is An In-Home Trained Attendant Service?</h1>

                <p className='font-poppins text-[#616f6f]'>
                    An in-home trained attendant service provides holistic support at home. Trained attendants, also known as caregivers, trained nurse for home, take care of the daily activities of a person in need. They help with personal grooming, movement, feeding, light housekeeping, and are also trained to monitor general health by regularly measuring essential vitals like heart rate, blood pressure, etc.
                </p>
            </div> <br />


            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'>When Do You Need Us?</h1>

                <h1 className='font-poppins text-[#009aa0]'>Elder Care</h1>
                <p className='font-poppins text-[#616f6f]'>
                    If you have an elderly loved one who needs support and assistance with daily activities, we give them the care and compassion they deserve. Get our  12 / 24-hr care attendant service at home.
                </p>

                <h1 className='font-poppins'>Health and Lifestyle Management</h1>
                <p className='font-poppins text-[#616f6f]'>If a loved one needs help moving around or to be monitored regularly, a trained attendant is exactly who you need at home</p>


                <h1 className='font-poppins text-[#009aa0] underline'>Mother And Baby Care</h1>

                <p className='font-poppins text-[#616f6f]'>Both mother and newborn need constant attention while feeding, bathing, housekeeping, and more. The support of a well-trained attendant at home will do them wonders.

                </p>

                <h1 className='font-poppins text-[#009aa0] underline'>Post-Operative Support</h1>

                <p className='font-poppins text-[#616f6f]'>Looking after someone who has just undergone surgery can be stressful for the family. However, a trained nurse for home can make things easier by keeping a check on the patient’s essential vitals and supporting the family.
                </p>
            </div> <br />


            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> How Can We Help?</h1>

                <p className='font-poppins text-[#616f6f]'>
                    Our home health care nursing attendant at home provide care to those in need, in the comfort of their homes. They can help with personal grooming, feeding, mobility, oral medication, monitoring of vitals and more. As per your requirement, you can hire the services for 12 hours caretaker or 24 hours caretaker. <br />

                    With Portea, you’re not just getting the best prices of Trained attendants service , you’re gaining a partner in your journey to recovery and well-being. We also offer a range of superior healthcare services, including doctor consultations, medical equipment, nursing care, physiotherapy, and diagnostics. Rely on us for top-tier healthcare solutions tailored to your requirements.
                </p>
            </div> <br />

            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'>Why Choose Our Trained Attendants Service?</h1>

                <ul className='list-disc px-3 list-inside marker:text-[#616f6f] space-y-4 font-poppins text-[#616f6f]'>

                    <li>You receive compassionate care for patient at home</li>
                    <li>We have 1,50,000+ happy customers</li>
                    <li>Our attendants are supervised by senior nurses and doctors</li>
                    <li>Our attendants are well trained and their backgrounds are checked</li>
                    <li>We assign you an attendant in such a way that he or she speaks a language you are comfortable with</li>
                    <li>EWe’re the recommended homecare partner for leading hospitals</li>
                    <li>We’re affordable, accountable and accessible</li>
                </ul>

            </div> <br />

            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> rained Attendants Near Me</h1>

                <p className='font-poppins text-[#616f6f]'>
                With the availability of attendant for patient at home, you no longer need to stress about visiting a clinic or hospital and aggravating an injury. Just Google “attendant for patient near me” or “home attendant services near me” and make an appointment with Portea. You will get the best home care attendant services to help you in regaining your normal life as soon as possible.
                </p>
            </div> <br /><br />


            <table className='font-poppins text-sm text-center'>
                    {
                        dataObj.map((item) => (
                            <tr key={item.id}>
                                <td className='bg-[#a3e4db] underline py-3 border p-2 px-32'> {item} </td>
                            </tr>
                        ))
                    }
                </table>


        </div>
    )
}

export default TrainedService
