import React from 'react'
import MedicalService from './MedicalService'
import NewOffer from './NewOffer'
import HappyCustomer from './HappyCustomer'
import OperationalCities from './OperationalCities'
import AllServices from './AllSerices'
import Home2 from './Home2'
import CaseStudies from './CaseStudies'
import { motion } from 'framer-motion'


function Home() {
  return (
    <motion.div
     variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1, y:0}

    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}
    >
      <div>
        <Home2 />
        <MedicalService />
        <NewOffer />
        <HappyCustomer />
        <CaseStudies />
        <OperationalCities />
        <AllServices />

      </div>
    </motion.div>
  )
}

export default Home
