import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import Review from '../Review/Review';

const reviews=[

    {
        id:1,
        name:'Winson Herry',
        address:'california',
        img:people1,
        comment:'It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribution using content here'
    },
    {
        id:2,
        name:'Sara joe',
        address:'california',
        img:people2,
        comment:'It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribution using content here'
    },
    {
        id:3,
        name:'Carlo andy',
        address:'california',
        img:people3,
        comment:'It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribution using content here'
    }

]

const Reviews = () => {
    return (
       <Container sx={{mt:8}}>
            <>
            <Typography variant="h6" sx={{fontSize:20,color:'#0CCDD4',textAlign:'left'}}>
                TESTIMONIAL
            </Typography>
            <Typography variant="h6" sx={{fontSize:35,textAlign:'left'}}>
                WHATS OUR PATIENTS <br />
                SAYS
            </Typography>
            <Grid container sx={{mt:-4}}>
                {
                    reviews.map(review=><Review key={review.id} review={review}/>)
                }
            </Grid>
        </>
       </Container>
    );
};

export default Reviews;