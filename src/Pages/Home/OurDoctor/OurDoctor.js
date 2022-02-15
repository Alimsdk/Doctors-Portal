import { Box, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Phone } from '@mui/icons-material';

const OurDoctor = ({doctor}) => {
    const {name,img,phone}=doctor;
    return (
        <Grid item={true} xs={12} sm={6} md={4}>
            <Paper elevation={0}>
              <CardMedia component="img" image={img} sx={{width:280,display:'flex',mx:'auto'}} alt="doctors img"/>
              <Box sx={{mt:2}}>
              <Typography variant="h5" sx={{textAlign:'center'}}>
                     {name}
              </Typography>
              <Typography variant="h6" sx={{fontWeight:300,fontSize:18,pt:1}}>
                  <Phone sx={{fontSize:24,pr:1,color:'#0CCDD4'}}/>
                     {phone}
              </Typography>
              </Box>
            </Paper>
        </Grid>
    );
};

export default OurDoctor;