import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor-small.png'
import OurDoctor from '../OurDoctor/OurDoctor';

const doctors=[
    {
        id:1,
        name:"Dr Caudi",
        phone:+613424551,
        img:doctor
    },
    {
        id:2,
        name:"Dr Caudi",
        phone:+613424551,
        img:doctor
    },
    {
        id:3,
        name:"Dr Caudi",
        phone:+613424551,
        img:doctor
    }
]

const OurDoctors = () => {
    return (
       <Container sx={{mt:10}}>
           <Typography variant="h5" sx={{color:'#0CCDD4',fontWeight:500,mb:8}}>
               Our Doctors
           </Typography>
            <Grid container>
            {
                doctors.map(doctor=><OurDoctor key={doctor.id} doctor={doctor}></OurDoctor>)
            }
        </Grid>
       </Container>
    );
};

export default OurDoctors;