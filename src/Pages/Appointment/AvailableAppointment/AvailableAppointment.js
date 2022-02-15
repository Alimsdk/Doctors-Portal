import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price:20
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price:15
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price:20
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price:25
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
         price: 35
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price:30
    },
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess,setBookingSuccess]=useState(false);
    return (
        <Container>
                        <Typography variant="h5" sx={{mb:5, color:'info.main'}}>Available Appointment On {date.toDateString()}</Typography>
                    {bookingSuccess && <Alert severity="success">            
            Appointment booked Successful ! 
             </Alert>}
            <Grid container spacing={2} gap={0}>
                       {
                           bookings.map(booking => <Booking key={booking.id} setBookingSuccess={setBookingSuccess} booking={booking} date={date}></Booking> )
                       }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;