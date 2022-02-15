import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,time,space,price}=booking;
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item={true} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
               <Typography sx={{color:'info.main'}} variant='h5'>
                   {name}
               </Typography>
               <Typography variant='h6'>
                   {time}
               </Typography>
               <Typography variant='caption'>
                 Price: ${price}
               </Typography> <br />
               <Typography variant='caption'>
                   {space} SPACES AVAILABLE
               </Typography>
            <Button onClick={handleOpen} sx={{display:'block',margin:'5px auto'}} variant='contained'>Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal open={open} handleClose={handleClose} setBookingSuccess={setBookingSuccess} date={date} booking={booking}></BookingModal>
        </>
    );
};

export default Booking;