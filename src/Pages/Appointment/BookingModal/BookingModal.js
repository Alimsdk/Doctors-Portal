import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({open,handleClose,booking,date,setBookingSuccess}) => {
    const {name,time,price}=booking;
    const {user}=useAuth();
    const initialInfo={patientName:user.displayName,patientEmail:user.email,phoneNumber:''}
    const [bookingInfo,setBookingInfo]=useState(initialInfo);


    const handleInputOnBlur=e=>{
       const field=e.target.name;
    
       const value=e.target.value;
       
     const newInfo={...bookingInfo}
     newInfo[field]=value;
     console.log(newInfo);
    setBookingInfo(newInfo)

    }

    const handleBookingForm=e=>{
        e.preventDefault();
       
        const appointment={
          ...bookingInfo,serviceName:name,
          date:date.toLocaleDateString(),
          time:time,
          price
        }

        fetch('http://localhost:5000/appointments',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(appointment)
        }).then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            alert('submitting');
            console.log(date);
            setBookingSuccess(true);
            handleClose();
          }
        })
       
    }

    

    
  

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingForm}>
          <TextField
         disabled
         sx={{width:'90%'}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
         
         sx={{width:'90%'}}
          id="outlined-size-small"
          placeholder="Your Name"
          onBlur={handleInputOnBlur}
         defaultValue={user.displayName}
          name="patientName"
          size="small"
        />
          <TextField
         
         sx={{width:'90%'}}
          id="outlined-size-small"
          placeholder="Your Email"
          onBlur={handleInputOnBlur}
         defaultValue={user.email}
          name="patientEmail"
          size="small"
        />
          <TextField
         
         sx={{width:'90%'}}
          id="outlined-size-small"
          name="phoneNumber"
          onBlur={handleInputOnBlur}
          placeholder="Phone Number"
          size="small"
        />
          <TextField
         disabled
         sx={{width:'90%'}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type="submit" variant="contained">Book</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;