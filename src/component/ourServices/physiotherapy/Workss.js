import React from 'react'
import physioInfoDesktop from './asset/physioInfoDesktop.png'
import physioInfoMobile from './asset/physioInfoMobile.png'
import PorteaService from '../PorteaService'


function Workss() {
    return (
        <div className='lg:px-12'>

            <div>

                <div className='p-12'>
                    <img src={physioInfoMobile} className='md:hidden' alt="" />

                    <img src={physioInfoDesktop} className='hidden md:block' alt="" />
                </div>




                <div className='lg:flex'>
                    <div className='p-5 space-y-5 grid justify-center w-full lg:w-[70%]'>
                        <div className=' grid justify-center w-full'>

                            <img src="https://www.portea.com/static/c437a902977b8fe7fcabe8d41d4c6124/43fa5/physio.png" alt="" />
                        </div>



                        <div className='space-y-2'>

                            <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> What Is Physiotherapy?</h1>

                            <p className='font-poppins'>
                                Physiotherapy, also referred to as physical therapy, is an allied health profession that makes use of bio-mechanics or kinesiology, manual therapy, exercise therapy, and electrotherapy, to help patients restore, maintain and increase their physical mobility, strength, and function. <br /> <br />

                                Physiotherapists are better able to help patients regain mobility, as they have a better understanding of how the body works and are trained in clinical skills to assess, diagnose and treat disabilities. Physiotherapists can help patients recover from injuries and disabilities ranging from back pain, neck pain, knee pain to ligament issues. <br /> <br />

                                Physiotherapy also helps in the rehabilitation of patients suffering from Parkinson’s, Paralysis, Stroke, Multiple Sclerosis, and Cerebral Palsy. Furthermore, physiotherapists can heal both chronic and acute problems by treating patients by physiotherapy at home.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> What Are The Important Benefits Of Physiotherapy Services At Home?</h1>

                            <p className='font-poppins'>
                                Physiotherapy has consistently demonstrated its efficacy in aiding patients to recover their health, and improve their physical strength, functionality, and mobility. To elevate your physiotherapy experience, we offer personalized sessions by having our expert physiotherapists visit you for physiotherapy at home. Here are the key benefits of opting for a physiotherapist at home: </p>

                            <ol className='font-poppins'>
                                <li> <span className='font-bold'>1. Convenience:</span>  Receive professional care without leaving your home, making it easier to integrate therapy into your daily routine.</li>
                                <li><span className='font-bold'>2. Personalized Care:</span>  Tailored treatment plans that address your specific rehabilitation needs, enhancing the effectiveness of each session.</li>
                                <li> <span className='font-bold'>3. Faster Healing Process:</span>  The comfort and familiarity of your home environment can facilitate a quicker recovery.</li>
                                <li> <span className='font-bold'>4. No Mobility Issues:</span>  Eliminates the challenge of traveling to a clinic, especially beneficial for patients with severe mobility restrictions.</li>
                                <li> <span className='font-bold'>5. Better Time Management:</span>  Schedule sessions at times that suit you best, ensuring that physiotherapy doesn’t disrupt your daily activities.</li>
                                <li> <span className='font-bold'>6. Cost-Effective:</span>  Save on travel expenses and receive affordable treatment plans without compromising on quality.</li>
                                <li> <span className='font-bold'>7. Family Support and Supervision:</span>  Having your family around during sessions can provide emotional support and ensure you’re performing exercises correctly under their supervision.</li>
                            </ol>
                            <p className='font-poppins'>

                                Our affordable and reliable home services are designed to eliminate the stress and inconvenience typically associated with traditional physiotherapy treatment. Say goodbye to the challenges of receiving effective therapy; with our at-home services, we bring the path to recovery directly to you.
                            </p>

                        </div>


                        <div className='space-y-2'>
                            <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> When Do You Need A Physiotherapist From Us?</h1>

                            <p className='font-poppins'>
                                Call it the bane of the modern lifestyle but knee pain, back pain, and neck strain have become a part and parcel of life. When a certain type of pain does not subdue over a period of time and you experience it after doing a particular movement, then it is better to see a physiotherapist or get the service of a physiotherapist at home. You can also benefit from our home physiotherapy service for a convenient treatment.
                            </p>
                        </div>

                    </div>

                    <div className='lg:w-[30%]'>
                        <PorteaService />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Workss
