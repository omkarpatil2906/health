import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { Stepper, Step, StepLabel } from '@mui/material';
import ContactDetails from './ContactDetails';
import DateTime from './DateTime';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    // boxShadow: 24,
};

function BookNow() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [currentStep, setCurrentStep] = useState(1);

    function showStep(step) {
        switch (step) {
            case 1:
                return <ContactDetails handleNext={handleNext} />;
            case 2:
                return <DateTime />;
             case 2:
                    return <DateTime />;
            
        }
    }

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
      };

    return (
        <div>
            <button onClick={handleOpen}>Book Now</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <div className='bg-pink-100 w-full flex flex-col justify-center items-center p-3 '>
                            <div className=" flex justify-end w-full px-3">
                                <button onClick={handleClose}>Close</button>
                            </div>
                            <img src="https://www.portea.com/static/logo-bdce0308d6dac6258f5f9c30993083ac.svg" alt="" className='h-14' />
                            <h1 className='font-semibold font-Montserrat'>Book Portea’s Medical Services at Home</h1>
                            <p className='font-light font-poppins text-xs'>Please enter your details and we will reach out to you as soon as we can.</p>
                        </div>

                        <div className=''>
                            <div className='flex justify-between p-5 bg-[#fafafa]'>

                            <Stepper sx={{width:'100%'}} activeStep={currentStep - 1} alternativeLabel className=''>
                                <Step>
                                    <StepLabel>Contact</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Select</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Select</StepLabel>
                                </Step>
                            </Stepper>
                            </div>
                            {showStep(currentStep)}
                           
                          
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default BookNow;
