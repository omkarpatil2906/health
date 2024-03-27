import React from 'react'

function CriticalInterest() {
    const obj = [
        {
            id:1,
            img:'https://www.portea.com/static/027762dfc5ac2860e1ad425d760576e7/8f3cf/Nursing-in-City-small.png',
            title:'Home Nursing Services',
        },
        {
            id:2,
            img:'https://www.portea.com/static/027762dfc5ac2860e1ad425d760576e7/8f3cf/Nursing-in-City-small.png',
            title:'Long Term Nursing Care',
        },
        {
            id:3,
            img:'https://www.portea.com/static/034848a438572db3c3e9e47a9162365b/8f3cf/ICU-respiratory-service-small.png',
            title:'Nurse For Icu Care At Home',
        },
        {
            id:4,
            img:'https://www.portea.com/static/034848a438572db3c3e9e47a9162365b/8f3cf/ICU-respiratory-service-small.png',
            title:'Nursing Service For Respiratory Care',
        },
        {
            id:5,
            img:'https://www.portea.com/static/100592d49fbcd890af7c20604d1525f5/03531/devon.jpg',
            title:'Dvt- Deep Vein Thrombosis Pump',
        },
       
    ]
  return (
    <div>


        <div className='grid grid-cols-5 gap-5 w-[90%] mx-auto py-12'>
            {obj.map((item)=>(
                <div key={item.id} className='border'>
                    <img src={item.img} alt="" />
                    <h2 className='p-3 font-poppins'>{item.title}</h2>
                    <button className='px-3 font-Montserrat underline text-[#009aa0]'>KNOW MORE</button>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default CriticalInterest
