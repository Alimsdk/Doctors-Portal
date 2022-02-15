import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import flouoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';


const services=[
    {
        name:'Fluoride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum placeat debitis aliquid, et explicabo? ",
        img:flouoride

    },
    {
        name:'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum placeat debitis aliquid, et explicabo? ",
        img:cavity

    },
    {
        name:'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum placeat debitis aliquid, et explicabo? ",
        img:whitening

    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{fontWeight:500 , color:'success.main' , my:2}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600,mb:5 }} variant="h4" component="div">
           SERVICES WE PROVIDE
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services?.map(service=><Service service={service} key={service.name}></Service> )
        }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;