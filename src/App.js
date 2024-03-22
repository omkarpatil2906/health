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


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/physiotherapy' element={<Physiotherapy/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/nursing' element={<Nursing/>}/>
        <Route path='/medicalequipments' element={<MedicalEquipment/>}/>
        <Route path='/trainedattendants' element={<TrainedAttendants/>}/>
        <Route path='/labtest' element={<LabTest/>}/>


      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App
