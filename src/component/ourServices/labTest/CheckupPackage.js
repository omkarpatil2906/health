import React from 'react'


function CheckupPackage() {

    const dataObj = [
        {
            id: 1,
            plan: 'Blood Sugar Test',
            test: 'PPBS Test '
        },
        {
            id: 2,
            plan: 'Double Marker Test',
            test: 'Lipid Profile Test'
        },
        {
            id: 3,
            plan: 'Kidney Profile Test',
            test: 'Urine Routine Test'
        },
        {
            id: 4,
            plan: 'Liver Function Test',
            test: 'Thyroid (TSH) Test'
        },
    ]

    return (
        <div className='p-5'>
            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> Complete Body Health Check Up Packages</h1>

                <p className='font-poppins text-[#616f6f]'>
                    We offer complete body health check up packages for you and your family, keep in mind that annual health check up is really important as we grow up, because with the growing age we become more susceptible to various diseases so complete body health check is really important to detect health problems before they become serious or incurable. Few of the packages are: (Click here for detailed health check up packages)
                </p>


                <div className='grid sm:grid-cols-3 gap-6'>
                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins underline  font-bold'>Basic Heart Checkup package</h1>
                        <p className='font-poppins text-[#616f6f] text-justify'>The Basic Heart Check package covers, Electrolytes Profile test, Liver Function Tests,Total Protein test, Tyriod Profile tests, Lipid Profile test, Kidney Function, Test Blood Sugar</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins underline  font-bold'>Advanced Heart/ Cardiac Checkup Package</h1>
                        <p className='font-poppins text-[#616f6f] text-justify'>The Advanced Heart Check package comprises, Liver Function Test, Thyroid Profile test, Lipid Profile Test, Kidney Function Test, CBC test, Blood Sugar, Electrolytes Profile Test.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins underline  font-bold'>Premium Heart Checkup Package</h1>
                        <p className='font-poppins text-[#616f6f] text-justify'>RBS Test, Lipid Profile Test, CBC Test, Potassium Serum Test, Creatinine Serum Test, Creatinine Kinase Test</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins underline font-bold'>Basic Diabetes Package</h1>
                        <p className='font-poppins text-[#616f6f] text-justify'>This package consists of 24 lab tests. Diabetes Screening (Fasting Blood Sugar,HbA1c), Routine Urine Analysis (colour, appearance, SG, Glucose, Protein, Blood, Bilirubin, Urobilinogen, nitrite, Pus Cells, Epithelial Cells, RBC, Crystals, Creatinine) and more.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins underline font-bold'>Advanced Diabetes Package</h1>
                        <p className='font-poppins text-[#616f6f] text-justify'>This package consists of 55 lab tests. CBC (Hb, WBC count, Neutrophils, Lymphocytes, Monocytes, Eosinophils, basophils, RBC count, Hematocrit, MCV, MCH, Platelet count), Diabetes Screening (Fasting Blood Sugar,HbA1c), Lipid Profile (Cholesterol – Total, Cholesterol – HDL, Cholesterol – LDL, Triglycerides, Total cholesterol/HDL ratio, Cholesterol VLDL, LDL / HDL Ratio) and more..</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Premium Diabetes Package</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>In this package, it covers 59 tests. CBC (Hb, WBC count, Neutrophils, Lymphocytes, Monocytes, Eosinophils, basophils, RBC count, Hematocrit, MCV, MCH, Platelet count), Diabetes Screening (Fasting Blood Sugar,HbA1c) and more.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Diabetes Health Check up Package</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>Comprising of sugar screening tests, cholesterol, lipid profile test and kidney tests, this package is designed for people who are diabetic or have irregular levels of sugar or glucose.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Executive Health Check up for Men</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>Routine investigation, sugar screening tests, cholesterol, liver tests, thyroid tests and kidney tests are included in this executive health package for men. This one is an ideal package for people having hectic work life and excessive mental and physical stress.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Executive Health Check up for Women</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>Executive health package for women includes routine investigations, sugar screening, lipid profile and thyroid tests which are very necessary for today’s women working busy schedules in stressful environment.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Health Check up Package for Hypertension</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>People having busy lifestyle, irregular diet patterns, lack of sleep and physical activity etc. face huge risks of high BP, heart disease and cardiovascular problems. Get this package to control the risk factors.</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Master Health Check</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>Complete Blood Count, ESR, Vitamin – B12, Vitamin D – Total, Lipid Profile – Cholesterol – Total, Cholesterol – HDL, Cholesterol – LDL, Triglycerides, Total cholesterol/HDL ratio, Cholesterol VLDL, LDL / HDL Ratio, Thyroid Profile – Thyroid Stimulating Hormone( TSH) , T3, T4, Kidney Function tests – Chloride, Creatinine, Potassium, Sodium (Na), Urea, Uric Acid, Blood Urea Nitrogen, BUN/Creatinine Ratio, Glucose – Random</p>

                    </div>

                    <div className='space-y-3 p-3'>
                        <h1 className='font-poppins  underline font-bold'>Antenatal Profile</h1>
                        <p className='font-poppins  text-[#616f6f] text-justify'>Random Blood Sugar (RBS), Blood Group & Rh Typing, HIV (I & II)-Human immunodeficiency virus Screening, CBC (12) – Hb, WBC count, Neutrophils, Lymphocytes, Monocytes, Eosinophils, basophils, RBC count, Hematocrit, MCV, MCH, Platelet count, VDRL – Venereal disease research laboratory (RPR), Routine urine analysis (14) – (colour, appearance, SG, Glucose, Protein, Blood, Bilirubin, Urobilinogen, nitrite, Pus Cells, Epithelial Cells, RBC, Crystals, Creatinine)</p>

                    </div>
                </div>

                <h1 className='border-s-4 border-orange-500 px-2  font-bold font-Montserrat text-2xl'>Top Selling Tests</h1> <br />


                <table className='font-poppins text-sm text-center'>
                    <tr>
                        <th className='bg-[#a3e4db] p-2 w-64'>Complete Blood Count </th>
                        <th className='bg-[#c0fefc] p-2 w-64'>RBS Test / FBS Test </th>
                    </tr>

                    {
                        dataObj.map((item) => (
                            <tr key={item.id}>
                                <td className='bg-[#a3e4db] border p-2'> {item.plan} </td>
                                <td className='bg-[#c0fefc] border p-2'> {item.test}</td>
                            </tr>
                        ))
                    }
                </table> <br />

                <div className=''>
                    <img src='https://www.portea.com/static/edca3c3ecbf01e5aa33c8055001439ab/aea64/lab-test970px-X-250-px.webp' className='' alt="" />
                </div>
            </div>

        </div>
    )
}

export default CheckupPackage
