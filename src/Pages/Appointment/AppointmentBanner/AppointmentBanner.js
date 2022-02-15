import { CardMedia, Container, Grid } from '@mui/material';
import React from 'react';

import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentBanner = ({date,setDate}) => {
    return (
       <Container sx={{mt:8}}>
           <Grid container spacing={2}>
               <Grid item={true} xs={12} md={6}>
                   <Calendar date={date} setDate={setDate}></Calendar>
               </Grid>
               <Grid item={true} xs={12} md={6}>
                 <CardMedia
                 component='img'
                  image={chair}
                  alt="chair"
                  sx={{width:400}}
                 />
               </Grid>
           </Grid>
       </Container>
    );
};

export default AppointmentBanner;