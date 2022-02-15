import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
 import doctor from '../../../images/doctor.png'
 import appointmentBg from '../../../images/appointment-bg.png'
import { Button, CardMedia, Typography } from '@mui/material';

const appointmentBackground={
    background : `url(${appointmentBg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode:'darken,luminosity',
    marginTop:180
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBackground} sx={{ flexGrow: 1 }}>
        <Grid container gap={8} spacing={2}>
          <Grid item={true} xs={12} md={4}>
          <CardMedia
        component="img"
       style={{width:'auto',height:'500px',marginTop:'-110px'}}
        image={doctor}
        alt="service"
      />
          </Grid>
          <Grid item={true} xs={12} md={7} sx={{display:'flex',alignItems:'center',textAlign:'left'}}>
         <Box>
         <Typography variant="h6" component="div" style={{color:'#0CCDD4',marginBottom:'15px'}}>
          Appointment
        </Typography>
          <Typography variant="h4" component="div" style={{color:'white'}}>
          Make an Appointment Today
        </Typography>
          <Typography variant="p" component="div" style={{color:'white',fontSize:'18px',margin:'20px 0'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt voluptate quia distinctio eum fugiat, saepe repellat ipsam eaque nostrum.
        </Typography>
        <Button style={{backgroundColor:'#0CCDD4'}} variant='contained'>Learn More</Button>
         </Box>
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;