import { CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {name,address,img,comment}=review;
    return (
       <Grid item={true} xs={12} sm={6} md={4} sx={{padding:'0 10px'}}>
           <Paper elevation={3} sx={{px:8,mt:8,borderRadius:3}}>
               <Typography variant="h6" sx={{color:'text.secondary',fontWeight:400,fontSize:16,pt:5}}>
                   {comment}
               </Typography>
               <Grid container sx={{alignItem:'center',py:4}}>
                   <Grid item={true} xs={4} >
                       <CardMedia component="img" image={img} />
                   </Grid>
                   <Grid item={true} xs={8} >
                   <Typography variant="h6" sx={{color:'#0CCDD4',fontWeight:400,fontSize:25}}>
                   {name}
               </Typography>
               <Typography variant="h6" sx={{color:'text.secondary',fontWeight:400,fontSize:16}}>
                   {address}
               </Typography>
                   </Grid>
               </Grid>

           </Paper>
       </Grid>
    );
};

export default Review;