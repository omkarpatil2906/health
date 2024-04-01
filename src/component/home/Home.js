import React from 'react'
import MedicalService from './MedicalService'
import NewOffer from './NewOffer'
import HappyCustomer from './HappyCustomer'
import OperationalCities from './OperationalCities'
import AllServices from './AllSerices'
import Home2 from './Home2'
import CaseStudies from './CaseStudies'



function Home() {
  return (
    <div>
      <div>
        <Home2 />
        <MedicalService />
        <NewOffer />
        <HappyCustomer />
        <CaseStudies />
        <OperationalCities />
        <AllServices />

      </div>
    </div>
  )
}

export default Home
