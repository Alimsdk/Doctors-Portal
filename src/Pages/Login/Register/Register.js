import React from 'react';
import { Alert, Button, CardMedia, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.png'
import useAuth from '../../../Hooks/useAuth';
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const [loginData,setLoginData]=useState(null);
    const {handleRegistration,loading,user,authError}=useAuth();
    const navigate=useNavigate();
    

    const handleInputValue=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    
    const handleLogInSubmit=e=>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('password didn"t match');
            return
        }
        handleRegistration(loginData.email,loginData.password,loginData.name,navigate)

     
    }
    
    return (
        <Container>
      <Grid container sx={{display:'flex',alignItems:'center'}}>
            <Grid item={true} xs={12} md={6}>
                <Typography variant="h6" sx={{mb:3}}>
                    Register
                </Typography>
                { !loading? <form onSubmit={handleLogInSubmit}>
              <TextField  sx={{width:3/4}}
      id="standard-multiline-flexible"
      name="name"
      onBlur={handleInputValue}
      label="Your Name"
      variant="standard"
    /> <br />
              <TextField  sx={{width:3/4,mt:2}}
      id="standard-multiline-flexible"
      name="email"
      onBlur={handleInputValue}
      label="Your Email"
      type="email"
      variant="standard"
    /> <br />
                <TextField sx={{width:3/4,mt:2}}
      id="standard-multiline-flexible"
      type='password'
      name="password"
      onBlur={handleInputValue}
      label="Your Password"
      variant="standard"
    /> <br />
                <TextField sx={{width:3/4,mt:2}}
      id="standard-multiline-flexible"
      type='password'
      name="password2"
      onBlur={handleInputValue}
      label="Re-Enter Password"
      variant="standard"
    /> <br />
    <Button type="submit" sx={{mt:5}} variant="contained">Register</Button>
    <NavLink to='/login'>
        <Button sx={{textDecoration:'none',display:'flex',margin:'0 auto'}}  variant="text">Already Regitered? Please Login</Button>
    </NavLink>
              </form> : 
        <CircularProgress/>
         }

         {
             user && 
             <Alert severity="success">            
            Registration Successful ! 
             </Alert>
           
         }
         {
             authError && <Alert severity="error">{authError}</Alert>
         }

            </Grid>
            <Grid item={true} xs={12} md={6}>
            <CardMedia component="img" image={loginImg}/>
            </Grid>
        </Grid>
        
    </Container>
    );
};

export default Register;