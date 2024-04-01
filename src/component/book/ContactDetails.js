import React from 'react'
import Select from 'react-select';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

function ContactDetails({ handleNext }) {

    const { register, handleSubmit} = useForm()

    const Submit = (data) => {
        console.log(data);
        handleNext()
    }
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
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <form autoComplete='off' onSubmit={handleSubmit(Submit)} className='flex flex-col justify-center w-[90%]  space-y-6 p-12'>

                <div>

                    <label htmlFor="name" className='font-poppins text-sm'>Name: </label><br />
                    <TextField
                        size='small'
                        placeholder='Please provide your name'
                        {...register("Name", { required: "Name is required" })}
                        className='w-full'
                        sx={{
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '0.9rem',
                                fontFamily: 'Poppins, sans-serif',
                            },
                            '& .MuiInputBase-input.MuiOutlinedInput-input': {
                                height: '20px',
                            },

                        }}
                    />
                </div>

                <div>

                    <label htmlFor="phoneNumber" className='font-poppins text-sm'>Phone Number: </label><br />
                    <TextField
                        size='small'
                        placeholder='To Coordinate with you'
                        className='w-[100%]'
                        sx={{
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '0.9rem',
                                fontFamily: 'Poppins, sans-serif',
                            },
                            '& .MuiInputBase-input.MuiOutlinedInput-input': {
                                height: '20px',
                            },

                        }}
                    />
                </div>


                <div>

                    <label htmlFor="city" className='font-poppins text-sm'>City</label> <br />
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
                            option: (provided, state) => ({
                                ...provided,
                                ":hover": {
                                    backgroundColor: "rgb(200, 200, 200)",
                                },
                            }),
                        }}
                    />
                </div>


                <button type='submit' className='bg-orange-400 font-poppins font-bold text-white uppercase p-2 '>Next</button>

            </form>

        </div>
    )
}

export default ContactDetails
