import { Button, Card, CardActions, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bannerImg from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg={
    background:`url(${bg})`,
    height:'650px'
}

const Banner = () => {
  
    return (
        <Container>
            
            <Grid style={bannerBg} container spacing={8} sx={{alignItems:'center'}}>
  <Grid item={true} xs={12} md={6}  sx={{textAlign:'left'}}>
 
 <Typography variant='h4' sx={{fontWeight:500,mb:2}}>
     Your New Smile <br />
     Starts Here
 </Typography>
 <Typography variant='h6' sx={{fontWeight: 200, fontSize:16, color:'text.secondary' , my:2 }}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at tenetur quaerat quam dicta hic, voluptatibus ratione exercitationem laborum omnis. Et sequi praesentium laborum a.
 </Typography>
 <CardActions>
     <Button style={{backgroundColor:'#0CCDD4'}} variant='contained'>Get Appointment</Button>
 </CardActions>

  </Grid>

  <Grid item={true} xs={12} md={6}>
  <CardMedia
  component="img"
  image={bannerImg}
  alt="doctors chair"
  style={{width:'400px'}}
/>
  </Grid>
  
</Grid>
        </Container>
    );
};

export default Banner;


