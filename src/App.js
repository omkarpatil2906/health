import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Physiotherapy from './component/ourServices/physiotherapy/Physiotherapy'
import About from './component/about/About'
import Nursing from './component/ourServices/nursing/Nursing'
import MedicalEquipment from './component/ourServices/medicalEquipment/MedicalEquipment'
import TrainedAttendants from './component/ourServices/trainedAttendants/TrainedAttendants'
import LabTest from './component/ourServices/labTest/LabTest'
import ElderCare from './component/ourServices/elderCare/ElderCare'
import DoctorConsultation from './component/ourServices/doctorConsultation/DoctorConsultation'
import MotherAndBabyCare from './component/ourServices/motherBabyCare/MotherAndBabyCare'
import DiabetesCare from './component/ourServices/diabetesCare/DiabetesCare'
import CovidCare from './component/ourServices/covidCare/CovidCare'
import Vaccination from './component/ourServices/vaccination/Vaccination'
import Counselling from './component/ourServices/counselling/Counselling'
import NutrationDiet from './component/ourServices/nutrationDiet/NutrationDiet'
import CriticalCare from './component/ourServices/criticalCare/CriticalCare'


function App() {
  return (
    <div style={{ overflowY: 'auto', height: '100vh', scrollbarWidth: 'thin',  scrollbarColor: '#72A0C1 #E0FFFF', }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/physiotherapy' element={<Physiotherapy/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/nursing' element={<Nursing/>}/>
        <Route path='/medicalequipments' element={<MedicalEquipment/>}/>
        <Route path='/trainedattendants' element={<TrainedAttendants/>}/>
        <Route path='/labtest' element={<LabTest/>}/>
        <Route path='/eldercare' element={<ElderCare/>}/>
        <Route path='/doctor-consulation' element={<DoctorConsultation/>}/>
        <Route path='/motherandbaby' element={<MotherAndBabyCare/>}/>
        <Route path='/diabetes' element={<DiabetesCare/>}/>
        <Route path='/critical-care' element={<CriticalCare/>}/>
        <Route path='/covid-care' element={<CovidCare/>}/>
        <Route path='/vaccination' element={<Vaccination/>}/>
        <Route path='/counselling' element={<Counselling/>}/>
        <Route path='/nutrition' element={<NutrationDiet/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App
