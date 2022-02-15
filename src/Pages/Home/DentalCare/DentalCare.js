import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'
const DentalCare = () => {
    return (
        <Container>
            <Grid container sx={{alignItems:'center',justifyContent:'center',mt:12}}>
                    <Grid item={true} xs={12} md={5}>
                      <CardMedia 
                       component="img"
                      image={treatment}
                      style={{height:'400px',width:'400px'}}
                      alt="treatment"
                      />
                    </Grid>
                    <Grid item={true} xs={12} md={7}>
                  <Box sx={{textAlign:'left'}}>
                  <Typography variant='h5' sx={{fontWeight:500,letterSpacing:1}}>
                          Exception Dental <br />
                          Care , On Your Terms
                        </Typography>
                        <Typography variant='h6' sx={{fontWeight:300,fontSize:15,my:4,lineHeight:2,width:'75%'}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nesciunt, sint optio assumenda quaerat impedit et facilis blanditiis numquam quibusdam unde delectus beatae obcaecati rem sed excepturi, ad aperiam quod provident fugit ullam necessitatibus nostrum
                        </Typography>
                        <Button style={{backgroundColor:'#0CCDD4'}} variant='contained'>Learn More</Button>
                  </Box>
                    </Grid>
            </Grid>
        </Container>
        
    );
};

export default DentalCare;