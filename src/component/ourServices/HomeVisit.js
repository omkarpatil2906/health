import { TextField } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import womanpng from '../footer/asset/woman.png'
import { Controller, useForm } from 'react-hook-form'

function HomeVisit() {
    const { register, handleSubmit, control, } = useForm()
    const cityOptions = [
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'pune', label: 'Pune' },
        { value: 'nagpur', label: 'Nagpur' },
        { value: 'nashik', label: 'Nashik' },
        { value: 'aurangabad', label: 'Aurangabad' },
        { value: 'solapur', label: 'Solapur' },
        { value: 'amravati', label: 'Amravati' },
        { value: 'kolhapur', label: 'Kolhapur' },
        { value: 'vasai-virar', label: 'Vasai-Virar' },
        { value: 'akola', label: 'Akola' },
    ];
    const submit = (data) => {
        console.log(data);
    }
    return (
        <div className='flex w-full justify-center mt-12'>

            <div className='bg-white p-5 m-4 lg:w-full border-2 border-orange-500  rounded-lg'>
                <div className='flex justify-center'>
                    <div className='bg-white p-2 rounded-full border  border-black  -mt-12'>
                        <div className='bg-orange-500 p-3 rounded-full'>
                            <img src={womanpng} className='h-7' alt="woman" />
                        </div>
                    </div>
                </div>
                <h1 className='text-center font-bold text-lg font-poppins'> Home Visit</h1>



                <form autoComplete='off' onSubmit={handleSubmit(submit)} className='flex flex-col justify-center  space-y-2'>
                    <label htmlFor="name" className='font-poppins text-orange-500'>Name: </label>

                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                name='search'
                                control={control}
                                size='small'
                                placeholder='Please provide your name'
                                {...field}
                                sx={{
                                    '& .MuiInputBase-input::placeholder': {
                                        fontSize: '0.9rem',
                                        fontFamily: 'Poppins, sans-serif',
                                    },

                                }}
                            />
                        )}
                    />

                    <label htmlFor="phoneNumber" className='font-poppins text-orange-500'>Phone Number: </label>
                    <TextField
                        size='small'
                        placeholder='To Coordinate with you'
                        className='w-[100%]'
                        {...register('number')}
                        sx={{
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '0.9rem',
                                fontFamily: 'Poppins, sans-serif',
                            },

                        }}
                    />

                    <label htmlFor="city" className='font-poppins text-orange-500'>City</label>
                    <Select
                        options={cityOptions}
                        placeholder='Service Need In?'
                        menuPlacement='top'
                        styles={{
                            indicatorSeparator: () => null,
                            control: (provided, state) => ({
                                ...provided,
                                fontSize: '14px',
                                fontFamily: 'Poppins, sans-serif'
                            }),
                            placeholder: (provided, state) => ({
                                ...provided,
                                fontSize: '14px',
                                fontFamily: 'Poppins, sans-serif',
                                color: '#aaa',
                            }),
                            menu: (provided) => ({
                                ...provided,
                                '& ::-webkit-scrollbar': {
                                    width: '10px',
                                    backgroundColor: '#E0FFFF'
                                },
                                '& ::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#72A0C1',
                                    borderRadius: '15px',
                                },

                            }),
                        }}
                    />


                    <span className='italic font-Montserrat font-light text-sm'>*I authorize Portea representative to contact me. I understand that this will override the DND status on my mobile number. </span>


                    <button type='submit' className='bg-orange-400 font-Montserrat text-white p-2 rounded-xl'>BOOK APPOINMENT</button>
                </form>
            </div>

        </div>
    )
}

export default HomeVisit














