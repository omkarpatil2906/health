import React, { useState } from 'react';
import { Menu } from '@mui/material';
import { BiSolidPhoneCall } from "react-icons/bi";
import indFlag from './asset/download.png'
import usaFlag from './asset/round.png'
import Physiotheropy from './asset/physiotherophy.svg'
import Nursing from './asset/Nursing.svg';
import MedicalEq from './asset/Medical Equipment.svg';
import TrainedAtted from './asset/Trained Attendants.svg';
import labTest from './asset/Lab Tests.svg';
import ElderCare from './asset/Elder Care.svg';
import DoctorCons from './asset/Doctor Consultation.svg';
import motherBaby from './asset/Mother & Baby Care.svg';
import Diabeties from './asset/Diabetes Care.svg';
import Critical from './asset/Critical Care.svg';
import CovidCrae from './asset/Covid Care.svg';
import Vaccination from './asset/Vaccination.svg';
import Counselling from './asset/Counselling.svg';
import Nutrution from './asset/Nutrition & Diet Consultation.svg';
import {  IoIosArrowDown} from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';
import BookNow from '../book/BookNow';




function Navbar() {
  const obj = [
    {
      id: 1,
      img: Physiotheropy,
      name: 'Physiotherophy',
      path: '/physiotherapy',
    },
    {
      id: 2,
      img: Nursing,
      name: 'Nursing',
      path: '/nursing',
    },
    {
      id: 3,
      img: MedicalEq,
      name: 'Medical Equipment',
      path: '/medicalequipments'
    },
    {
      id: 4,
      img: TrainedAtted,
      name: 'Trained Attendants',
      path: "/trainedattendants"
    },
    {
      id: 5,
      img: labTest,
      name: 'Lab Test',
      path: '/labtest'
    },
    {
      id: 6,
      img: ElderCare,
      name: 'Elder Care',
      path: '/eldercare'
    },
    {
      id: 7,
      img: DoctorCons,
      name: 'Doctor Consultation',
      path: '/doctor-consulation'
    },
    {
      id: 8,
      img: motherBaby,
      name: 'Mother & Baby Care',
      path: '/motherandbaby'
    },
    {
      id: 9,
      img: Diabeties,
      name: 'Diabeties Care',
      path: '/diabetes'
    },
    {
      id: 10,
      img: Critical,
      name: 'Critical Care',
      path: '/critical-care'
    },
    {
      id: 11,
      img: CovidCrae,
      name: 'Covid Care',
      path:'/covid-care'
    },
    {
      id: 12,
      img: Vaccination,
      name: 'Vaccination',
      path: '/vaccination'
    },
    {
      id: 13,
      img: Counselling,
      name: 'Counselling',
      path: '/counselling'
    },
    {
      id: 14,
      img: Nutrution,
      name: 'Nutration and Diet Consultation',
      path: '/nutrition'
    },
  ]

  const [open, setOpen] = useState(false)
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const [countryAnchorEl, setCountryAnchorEl] = React.useState(null);
  const [showMap, setShowMap] = useState(true);

  const handleListClick = () => {
    setOpen(false);
  } 

  const handleClick = () => {
    setShowMap(true);
  }

  const handleClose = () => {
    setShowMap(false);
  }

  function handleServicesClick(event) {
    setServicesAnchorEl(event.currentTarget);
  }

  function handleServicesClose(event, path) {
  
    setServicesAnchorEl(null);
  }

  function handleCountryClick(event) {
    setCountryAnchorEl(event.currentTarget);
  }

  function handleCountryClose() {
    setCountryAnchorEl(null);
  }

  return (
    <div className='font-Montserrat font-medium sticky top-0 left-0 z-50 bg-white'>
      <nav>

        <div className='lg:hidden'>
          <div className='flex justify-between w-full items-center p-4'>
            <h1 className='w-[30%]'>
              <img src="https://www.portea.com/static/logo-bdce0308d6dac6258f5f9c30993083ac.svg" className='h-12' alt="" />
            </h1>

            {/* <div  className='flex items-center bg-blue-100 p-2 text-lg font-bold rounded-lg'>
                <img src={indFlag} className='h-5' alt="" />
                <div className='flex items-center space-x-2'>
                  <button> <BiSolidPhoneCall className='text-xl text-red-500' /></button>
                  <h1>+1800 121 2323</h1>
                </div>
              </div> */}

            <div>
              <button onClick={() => setOpen(!open)}>{open ? <IoClose className='text-4xl text-[#00979e]' /> : <TfiMenu className='text-3xl text-[#00979e]' />}</button>
            </div>

          </div>

          <div>

            <ul className={open ? "fixed top-16 p-5 space-y-2 right-0 h-screen w-[80%] bg-white  transition-transform duration-500 translate-x-0" : "fixed top-16 right-0 p-5 space-y-2 h-screen w-[80%] bg-white  transition-transform duration-500 translate-x-full"}>

              <li>
                <div className='flex justify-between' onClick={showMap ? handleClose : handleClick}>
                  <h1 className='font-bold font-poppins text-lg'>Our Service</h1>
                  <button>{showMap ? <MdKeyboardArrowUp className='text-2xl' /> : <IoIosArrowDown />}</button>
                </div>

                {showMap && (
                  <div className='grid grid-cols-2 gap-5 text-sm p-4'>
                    {obj.map((item) => (
                      <div className='flex gap-2' key={item.id}>
                        <img src={item.img} className='h-4 w-5' alt="" />
                        <h1 className='cursor-pointer font-poppins'  onClick={handleListClick}><Link to={item.path}> {item.name}</Link></h1>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <hr />
              <li className='font-poppins font-bold' onClick={handleListClick}><Link to='/about'> About Us</Link> </li>
              <li className='font-poppins font-bold'>Investor Relation</li>
              <button className='font-Montserrat bg-orange-500 px-3 p-1 text-white rounded-lg'>Book Now</button>
            </ul>
          </div>

        </div>



        <ul className='hidden lg:flex justify-between items-center p-4 font-semibold '>
          <li className='w-[40%]'>
            <Link to="/">
            <img src="https://www.portea.com/static/logo-bdce0308d6dac6258f5f9c30993083ac.svg" className='h-12' alt="" />
            </Link>
           
          </li>

          <div className='w-[70%] justify-between items-center hidden lg:flex'>
            <li className=''>
              <h1 onClick={handleServicesClick}   className='flex items-center cursor-pointer hover:text-[#00979e] gap-2'> Our Services <span><IoIosArrowDown  className='text-[#00979e] text-xl'/></span></h1>
              <Menu
                id="services-menu"
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={handleServicesClose}
                onMouseLeave={handleServicesClose}
                className='mt-2 w-[70%]'
              >

                <div className='grid grid-cols-2 gap-2 '>
                  {
                    obj.map((item) => (
                      <div key={item.id} className='flex gap-2 p-2'>
                        <img src={item.img} className='h-6 w-12' alt="" />
                        <h1 className='cursor-pointer hover:text-[#00979e] text-sm font-poppins'  onClick={() => handleServicesClose()}> <Link to={item.path}> {item.name}</Link></h1>
                      </div>
                    ))
                  }
                </div>

              </Menu>
            </li>
            <li className='cursor-pointer hover:text-[#00979e]'><Link to='/about'>About Us</Link></li>
            <li className='cursor-pointer hover:text-[#00979e]'>Investor Relations</li>
            <li className=''>

              <div onClick={handleCountryClick}  className='flex items-center bg-blue-100 p-2 text-lg font-bold rounded-lg'>
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
            <div  className='bg-orange-500 px-12 p-2 rounded-xl text-white '><BookNow/></div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
