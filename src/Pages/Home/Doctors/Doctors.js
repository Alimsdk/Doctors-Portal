import React, { useEffect, useState } from 'react';
import {Grid} from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <Grid container sx={{marginTop:'30px'}}>
          {
              doctors?.map(doctor=><Doctor key={doctor._id} doctor={doctor} /> )
          }
        </Grid>
    );
};

export default Doctors;