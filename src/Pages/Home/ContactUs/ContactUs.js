import { Box, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import formbg from '../../../images/appointment-bg.png'

const formBackground={
    background:`url(${formbg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode:'darken,luminosity',
    height:500
    
}


const ContactUs = () => {
    return (
        <Container style={formBackground} sx={{mt:8}}>
            <Box>
            <Typography variant="h6" sx={{color:'#0CCDD4',fontWeight:500,pt:4}}>
                Contact Us
            </Typography>
        
            <Typography variant="h4" sx={{color:'white',mb:4}}>
                Always Connect With Us
            </Typography>

            <TextField required sx={{width:2/3,mb:3,background:'white'}} id="outlined-search" label="Email Address" type="search" />
            <TextField required sx={{width:2/3,mb:3,background:'white'}} id="outlined-search" label="Subject" type="search" />
            <TextField required sx={{width:2/3,background:'white'}} rows={4} multiline id="outlined-search" label="Your Message" type="search" />

            </Box>
      </Container>
    );
};

export default ContactUs;