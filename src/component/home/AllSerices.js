import React from 'react';

function AllServices() {
    const cities = ['Bangalore', 'NCR-Delhi', 'Mumbai', 'Agra', 'Siliguri', 'Meerut', 'Surat', 'Madurai', 'Vellore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Lucknow', 'Chandigarh', 'Jaipur', 'Gwalior', 'Raipur', 'Indore', 'Kochi', 'Kozhikode', 'Thrissur', 'Guwahati', 'Visakhapatnam', 'Vijayawada', 'Ludhiana', 'Mysuru', 'Coimbatore', 'Salem', 'Nagpur', 'Ahmedabad', 'Asansol/Durgapur', 'Belgaum', 'Dehradun', 'Goa', 'Hubli–Dharwad', 'Jamshedpur', 'Pondicherry', 'Ranchi'];

    return (
        <div className='mt-12'>
            <div className='bg-[#324156] py-12 space-y-2'>
                <h1 className='text-center text-white py-5 text-3xl font-bold font-Montserrat'>Services Available In</h1>

                <div className='grid gap-4 grid-cols-2 lg:grid-cols-7 justify-items-center w-[100%] font-poppins text-sm'>
                    {cities.map((city, index) => (

                        <h1 className='w-[80%] text-center text-white py-3 px-6 bg-[#415169] rounded-lg' key={index}>{city}</h1>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllServices;
