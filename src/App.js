import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Physiotherapy from './component/ourServices/physiotherapy/Physiotherapy'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/physiotherapy' element={<Physiotherapy/>}/>
       
      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App
