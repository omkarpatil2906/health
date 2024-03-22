import React from 'react'

function CheckupPackage() {
    return (
        <div className='p-5'>
            <div className='space-y-4'>

                <h1 className='border-s-4 border-orange-500 px-2 text-xl font-bold font-Montserrat'> Complete Body Health Check Up Packages</h1>

                <p className='font-poppins'>
                    We offer complete body health check up packages for you and your family, keep in mind that annual health check up is really important as we grow up, because with the growing age we become more susceptible to various diseases so complete body health check is really important to detect health problems before they become serious or incurable. Few of the packages are: (Click here for detailed health check up packages)
                </p>


                <div className='grid sm:grid-cols-3 gap-6'>
                    <div>
                        <h1 className='font-poppins underline text-sm font-bold'>Basic Heart Checkup package</h1>
                        <p className='font-poppins'>The Basic Heart Check package covers, Electrolytes Profile test, Liver Function Tests,Total Protein test, Tyriod Profile tests, Lipid Profile test, Kidney Function, Test Blood Sugar</p>

                    </div>

                    <div>
                        <h1 className='font-poppins underline text-sm font-bold'>Advanced Heart/ Cardiac Checkup Package</h1>
                        <p className='font-poppins'>The Advanced Heart Check package comprises, Liver Function Test, Thyroid Profile test, Lipid Profile Test, Kidney Function Test, CBC test, Blood Sugar, Electrolytes Profile Test.</p>

                    </div>

                    <div>
                        <h1 className='font-poppins underline text-sm font-bold'>Premium Heart Checkup Package</h1>
                        <p className='font-poppins'>RBS Test, Lipid Profile Test, CBC Test, Potassium Serum Test, Creatinine Serum Test, Creatinine Kinase Test</p>

                    </div>

                    <div>
                        <h1 className='font-poppins underline text-sm font-bold'>Basic Diabetes Package</h1>
                        <p className='font-poppins'>This package consists of 24 lab tests. Diabetes Screening (Fasting Blood Sugar,HbA1c), Routine Urine Analysis (colour, appearance, SG, Glucose, Protein, Blood, Bilirubin, Urobilinogen, nitrite, Pus Cells, Epithelial Cells, RBC, Crystals, Creatinine) and more.</p>

                    </div>

                    <div>
                        <h1 className='font-poppins underline text-sm font-bold'>Advanced Diabetes Package</h1>
                        <p className='font-poppins'>This package consists of 55 lab tests. CBC (Hb, WBC count, Neutrophils, Lymphocytes, Monocytes, Eosinophils, basophils, RBC count, Hematocrit, MCV, MCH, Platelet count), Diabetes Screening (Fasting Blood Sugar,HbA1c), Lipid Profile (Cholesterol – Total, Cholesterol – HDL, Cholesterol – LDL, Triglycerides, Total cholesterol/HDL ratio, Cholesterol VLDL, LDL / HDL Ratio) and more..</p>

                    </div>

                    <div>
                        <h1 className='font-poppins underline text-sm font-bold'>Premium Diabetes Package</h1>
                        <p className='font-poppins'>In this package, it covers 59 tests. CBC (Hb, WBC count, Neutrophils, Lymphocytes, Monocytes, Eosinophils, basophils, RBC count, Hematocrit, MCV, MCH, Platelet count), Diabetes Screening (Fasting Blood Sugar,HbA1c) and more.</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckupPackage
