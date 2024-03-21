import React from 'react'
import MedicalService from './MedicalService'
import NewOffer from './NewOffer'
import HappyCustomer from './HappyCustomer'
import OperationalCities from './OperationalCities'
import AllServices from './AllSerices'
import Home2 from './Home2'

function Home() {
  return (
    <div>
      <Home2 />
      <MedicalService />
      <NewOffer />
      <HappyCustomer />
      <OperationalCities />
      <AllServices />
    </div>
  )
}

export default Home
