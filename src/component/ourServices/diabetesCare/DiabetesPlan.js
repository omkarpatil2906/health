import React from 'react'

function DiabetesPlan() {
    const dataObj = [
        {
            id: 1,
            plan: 'Blood Sugar Test',
            mrp: 1145,
            price: 875,
        },
        {
            id: 2,
            plan: 'Double Marker Test',
            mrp: 3560,
            price: 1470,
        },
        {
            id: 3,
            plan: 'Kidney Profile Test',
            mrp: 4020,
            price: 1915,
        },

    ]
    return (
        <div className='p-5 space-y-12'>
            <div className='space-y-5'>
                <h1 className='border-s-4 border-orange-500 px-2 text-2xl  font-bold font-Montserrat'> Our Diabetes Care Program Plan</h1>

                <p className='font-poppins text-[#616f6f]'>
                    Portea’s Diabetes Care Program is created with a vision to help people manage their Diabetes in a natural and comfortable way. Our expert counselors will work with you to help you track, manage and lower your blood sugar levels. Your counselor will create your personalized diet plan depending on your preferences and lifestyles. <br /> <br />

                    Our team of Diabetic nurses and nutritionists work closely (on phone) with every patient to help them on a range of issues, with the overarching aim to increase blood sugar levels.
                </p>
            </div>

            <div className='space-y-5'>

                <h1 className='border-s-4 border-orange-500 px-2 text-2xl font-bold font-Montserrat'>Our Offering Diabetes Care Packs</h1>

                <p className='font-poppins text-[#616f6f]'>
                    India’s first comprehensive diabetes management program is designed to help diabetics to manage their blood sugar levels to lead a healthy life. The program is designed in consultation with our knowledge partners Belle Sante, who have served thousands of patients across 32 countries. We’ll work with you for 1 Year to help you become self-sufficient in managing your diabetes.
                </p> <br />

                <p className='font-poppins text-[#616f6f]'>DIABETES CARE PACKAGE @RS. 875</p>
                <ul className='list-disc list-inside marker:text-[#616f6f] px-3 text-[#616f6f] space-y-4 font-poppins'>
                    <li>OneTouch Select Plus Simple (SPS) Glucometer</li>
                    <li>Personal Health Coach</li>
                    <li>10 Testing Strips</li>
                </ul> <br />

                <p className='font-poppins text-[#616f6f]'>
                    One Touch Select Plus Simple Glucometer is a blood glucose monitoring system that has been designed to be simple and hassle free with no setups, no coding and no buttons. It gives a proper understanding and reassurance with its color and sound quality. It helps to monitor the blood glucose level with comfort at home and helps in keeping diabetes and related issues in check.
                </p> <br />

                <p className='font-poppins text-[#616f6f]'>
                    <span className='font-bold text-black'> Personal Health Coach:</span>  A dedicated Health Coach is assigned to you, who will work with you to design your diet and exercise plan to achieve the best results within a month.
                </p> <br />

                <p className='font-poppins text-[#616f6f]'>
                    <span className='font-bold text-black'> 10 Testing Strips:</span>  strips, to help you get started
                </p> <br />

                <p className='font-poppins text-[#616f6f]'>DIABETES STATISTICS</p>
                <ul className='list-disc list-inside marker:text-[#616f6f] px-3 text-[#616f6f] space-y-4 font-poppins'>
                    <li>1 out of every 10 people in India is either Diabetic or Pre-Diabetic</li>
                    <li>1 out of 2 adults with Diabetes is undiagnosed</li>
                    <li>50 million people suffer from type-2 diabetes.</li>
                    <li>An estimated 3.4 million deaths are caused due to high blood sugar</li>
                </ul> <br />


                <h1 className='border-s-4 border-orange-500 px-2  font-bold font-Montserrat text-2xl'>Best Diabetes Care Package Offers From Portea</h1> <br />


                <table className='font-poppins text-sm text-center'>
                    <tr>
                        <th className='bg-[#a3e4db] p-2 w-64'>Diabetes care Packages</th>
                        <th className='bg-[#c0fefc] p-2 w-64'>MRP</th>
                        <th className='bg-[#c0fefc] p-2 w-64'>Portea Best Offer price</th>

                    </tr>

                    {
                        dataObj.map((item) => (
                            <tr key={item.id}>
                                <td className='bg-[#a3e4db] border p-2'> {item.plan} </td>
                                <td className='bg-[#c0fefc] border p-2'> {item.mrp}</td>
                                <td className='bg-[#c0fefc] border p-2'> {item.price}</td>

                            </tr>
                        ))
                    }
                </table> <br />
            </div>
        </div>
    )
}

export default DiabetesPlan
