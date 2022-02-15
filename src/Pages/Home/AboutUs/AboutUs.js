import { Card, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    return (
  <Box sx={{mt:-12}} style={{color:'white'}}>
         <Container>
            <Grid container spacing={2}>
  <Grid item={true} xs={12}  md={4}>
    <Box sx={{display:'flex',background:'#0CCDD4',px:8,py:2,borderRadius:1}} >
         <div>
             icon 
         </div>
        <div>
        <Typography variant="h6" sx={{fontSize:20}}>
              Opening Hours
         </Typography>
         <Typography variant="h6" sx={{fontSize:14,fontWeight:200}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, reiciendis.
         </Typography>
        </div>
    </Box>
  </Grid>
  <Grid item={true} xs={12} md={4}>
  <Box sx={{display:'flex', background:'#3A494A',px:8,py:2,borderRadius:1}} >
         <div>
             icon 
         </div>
        <div>
        <Typography variant="h6" sx={{fontSize:20}}>
              Opening Hours
         </Typography>
         <Typography variant="h6" sx={{fontSize:14,fontWeight:200}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, reiciendis.
         </Typography>
        </div>
    </Box>
  </Grid>
  <Grid item={true} xs={12} md={4}>
  <Box sx={{display:'flex',background:'#0CCDD4',px:8,py:2,borderRadius:1}}>
         <div>
             icon 
         </div>
        <div>
        <Typography variant="h6" sx={{fontSize:20}}>
              Opening Hours
         </Typography>
         <Typography variant="h6" sx={{fontSize:14,fontWeight:200}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, reiciendis.
         </Typography>
        </div>
    </Box>
  </Grid>
  
</Grid>
     </Container>
      </Box>
    );
};

export default AboutUs;