import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { BiSolidPhoneCall } from "react-icons/bi";
import indFlag from './asset/download.png'
import  usaFlag from './asset/round.png'
import Physiotheropy  from './asset/physiotherophy.svg'
import Nursing from './asset/Nursing.svg';
import MedicalEq from './asset/Medical Equipment.svg';
import TrainedAtted  from './asset/Trained Attendants.svg';
import labTest from './asset/Lab Tests.svg';
import ElderCare  from './asset/Elder Care.svg';
import DoctorCons from './asset/Doctor Consultation.svg';
import motherBaby from './asset/Mother & Baby Care.svg';
import Diabeties  from './asset/Diabetes Care.svg';
import Critical from './asset/Critical Care.svg';
import CovidCrae from './asset/Covid Care.svg';
import Vaccination from './asset/Vaccination.svg';
import Counselling from './asset/Counselling.svg';
import Nutrution from './asset/Nutrition & Diet Consultation.svg';
import { IoIosArrowDown } from "react-icons/io";



function Navbar() {
  const obj = [
    {
      id: 1 ,
      img:Physiotheropy,
      name:'Physiotherophy'
    },
    {
      id: 2,
      img:Nursing,
      name:'Nursing'
    },
    {
      id: 3,
      img:MedicalEq,
      name:'Medical Equipment'
    },
    {
      id: 4,
      img:TrainedAtted,
      name:'Trained Attendants'
    },
    {
      id: 5,
      img:labTest,
      name:'Lab Test'
    },
    {
      id: 6,
      img:ElderCare,
      name:'Elder Care'
    },
    {
      id: 7,
      img:DoctorCons,
      name:'Doctor Consultation'
    },
    {
      id: 8,
      img:motherBaby,
      name:'Mother & Baby Care'
    },
    {
      id: 9,
      img:Diabeties,
      name:'Diabeties Care'
    },
    {
      id: 10,
      img:Critical,
      name:'Critical Care'
    },
    {
      id: 11,
      img:CovidCrae,
      name:'Covid Care'
    },
    {
      id: 12,
      img:Vaccination,
      name:'Vaccination'
    },
    {
      id: 13,
      img:Counselling,
      name:'Counselling'
    },
    {
      id: 14,
      img:Nutrution,
      name:'Nutration and Diet Consultation'
    },
  ]

  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const [countryAnchorEl, setCountryAnchorEl] = React.useState(null);

  function handleServicesClick(event) {
    setServicesAnchorEl(event.currentTarget);
  }

  function handleServicesClose() {
    setServicesAnchorEl(null);
  }

  function handleCountryClick(event) {
    setCountryAnchorEl(event.currentTarget);
  }

  function handleCountryClose() {
    setCountryAnchorEl(null);
  }

  return (
    <div className='font-Montserrat font-medium'>
      <nav className=''>
        <ul className='flex justify-between items-center p-4 '>
          <li className='w-[40%]'>
            <img src="https://www.portea.com/static/logo-bdce0308d6dac6258f5f9c30993083ac.svg" className='h-12' alt="" />
          </li>
          <div className='flex w-[60%] justify-between items-center'>
            <li className='hidden lg:block'>
              <h1 onClick={handleServicesClick} onMouseEnter={handleServicesClick} className='flex items-center gap-2'> Our Services <span><IoIosArrowDown/></span></h1>
              <Menu
                id="services-menu"
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={handleServicesClose}
                onMouseLeave={handleServicesClose}
                className='mt-10'
              >

                <div className='grid grid-cols-2 gap-2'>
                  {
                    obj.map((item)=>(
                      <div className='flex gap-2'>
                        <img src={item.img} className='h-6 w-12' alt="" />
                        <h1 className='cursor-pointer font-poppins'>{item.name}</h1>
                      </div>
                    ))
                  }

                </div>

              </Menu>
            </li>
            <li  className='hidden lg:block'>About Us</li>
            <li  className='hidden lg:block'>Investor Relations</li>
            <li  className='hidden lg:block'>

              <div onClick={handleCountryClick} onMouseEnter={handleCountryClick} className='flex items-center bg-blue-100 p-2 text-lg font-bold rounded-lg'>
                <img src={indFlag} className='h-5' alt="" />
                <div className='flex items-center space-x-2'>
                  <button> <BiSolidPhoneCall className='text-xl text-red-500' /></button>
                  <h1>+1800 121 2323</h1>
                </div>
              </div>

              <Menu
                id="country-menu"
                anchorEl={countryAnchorEl}
                open={Boolean(countryAnchorEl)}
                onClose={handleCountryClose}
                onMouseLeave={handleCountryClose}
                className='mt-5'
              >
                <div className='p-2 space-y-2'>
                  <div className='flex items-center gap-2'>
                    <img src={indFlag} className='h-6' alt="" />
                    <div className='text-xs'>
                      <h1>+1800 121 2323</h1>
                      <p className='text-orange-500'>(India)</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={usaFlag} className='h-6' alt="" />
                    <div className='text-xs'>
                      <h1>+1 (979) 401-2323</h1>
                      <p className='text-orange-500'>(Outside India)</p>
                    </div>
                  </div>

                </div>
              </Menu>
            </li>
            <button className='bg-orange-500 px-12 p-2 rounded-xl text-white hidden lg:block'>Book Now</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
