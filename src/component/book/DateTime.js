import { TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

function DateTime() {

  const { register, handleSubmit} = useForm()

  const Submit = (data) => {
      console.log(data);
      handleNext()
  }

  return (
    <div>
      <form autoComplete='off' onSubmit={handleSubmit(Submit)} className='flex flex-col justify-center w-[90%]  space-y-6 p-12'>

        <div>

          <label htmlFor="Date" className='font-poppins text-sm'>Date: </label><br />
          <TextField
            size='small'
            placeholder='Please enter date'
            {...register("Date", { required: "Date is required" })}
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

          <label htmlFor="time" className='font-poppins text-sm'>Time: </label><br />
          <TextField
            size='small'
            placeholder='Time'
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


      


        <button type='submit' className='bg-orange-400 font-poppins font-bold text-white uppercase p-2 '>Next</button>

      </form>
    </div>
  )
}

export default DateTime
