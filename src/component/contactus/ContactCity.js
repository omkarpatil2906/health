import React from 'react'
import { MdLocationOn } from 'react-icons/md'

function ContactCity() {
    const cities = [
        {
            id:1,
            name:'BANGALORE',
            location:'Portea™ Medical, 69/B, 1st Stage, 1st Cross Road, Domlur, Bengaluru, Karnataka 560071'
        },
        {
            id:2,
            name:'MUMBAI',
            location:'2/249 Ground floor anand nagar Vakola santacruz east Mumbai Mumbai - 400055'
        },
        {
            id:3,
            name:'Delhi',
            location:'A29, Block A, FIEE complex, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020.'
        },
        {
            id:4,
            name:'Kolkata',
            location:'7 Eliot Road,2nd Floor Kolkata-700016'
        },
        {
            id:5,
            name:'Pune',
            location:'Indraprastha building 2nd floor no: 2015 senapathi bapat road, next to symbiosis dadhichi rushi chowk signal Pune - 411016'
        },
        {
            id:6,
            name:'Chennai',
            location:'No : 714 B, 7th Floor , 2nd Space Spencer Plaza Annasalai Chennai - 600002'
        },
        {
            id:7,
            name:'Hyderabad',
            location:'No: 401,Triveni Towers,MIG 154,Road No:1,KPHB Near Prime Hospital, Hyderabad-500072.'
        },
        {
            id:8,
            name:'Jaipur',
            location:'Flat No 102 Ist floor Plot no 10/806 Pushpak Apartment Malviya Nagar Jaipur 302017'
        },
        {
            id:9,
            name:'Chandigarh',
            location:'E-309, 3rd floor- phase gate-A industrail area Punjab. Pin code 160055'
        },
        {
            id:10,
            name:'Indore',
            location:'Plot No. 6/6, New Palasia, 108, 1st Floor, Westend Corporate, Indore - 452001 (M.P.)'
        },
        {
            id:11,
            name:'Lucknow',
            location:'2nd floor, MVD plaza opp TC eye center vinay khand-4 gomtinagar Lucknow-226010'
        },
        {
            id:12,
            name:'Vijaywada',
            location:'S-4 sree apartments, Bharat gas godown street, LIC colony opp ITI college Vijaywada-520008'
        },
    ]
  return (
    <div>

        <div className='bg-[#effffd] grid gap-4 p-12 lg:grid-cols-3'>
            {cities.map((item)=>(
                <div className='space-y-4 bg-white p-5'>
                    <h1 className='font-Montserrat font-bold text-xl text-[#009aa0cc]'>{item.name}</h1>
                    <p className='flex items-center gap-2 text-xs font-poppins'><MdLocationOn className='text-xl text-[#009aa0cc]' />{item.location}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default ContactCity
