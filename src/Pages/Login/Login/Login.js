import { Alert, Button, CardMedia, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../images/login.png'

const Login = () => {
     const [loginData,setLoginData]=useState(null);
     const {handleLoginUser,loading,user,authError, loginUsingGoogle}=useAuth();
     const navigate=useNavigate();
    const location=useLocation();

    const signInUsingGoogle=()=>{
        loginUsingGoogle(location,navigate)
    }

    const handleInputChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    
    const handleLogInSubmit=e=>{
        handleLoginUser(loginData.email,loginData.password,location,navigate);
        e.preventDefault();
    
          console.log(location.state.from);
    
    }

  
    
    return (
        <Container>
          {!user?  <Grid container sx={{display:'flex',alignItems:'center'}}>
                <Grid item={true} xs={12} md={6}>
                    <Typography variant="h6" sx={{mb:3}}>
                        LogIn
                    </Typography>
               {  !loading? <form onSubmit={handleLogInSubmit}>
                  <TextField  sx={{width:3/4}}
          id="standard-multiline-flexible"
          name="email"
          onChange={handleInputChange}
          label="Your Email"
          variant="standard"
        /> <br />
                    <TextField sx={{width:3/4,mt:2}}
          id="standard-multiline-flexible"
          type='password'
          name="password"
          onChange={handleInputChange}
          label="Your Password"
          variant="standard"
        /> <br />
        <Button type="submit" sx={{mt:5}} variant="contained">Login</Button>
       
        <NavLink to='/register'>
            <Button sx={{textDecoration:'none',display:'flex',margin:'0 auto'}}  variant="text">New User? Register Now</Button>
        </NavLink>
        ___________________________________
        <Button variant="contained" sx={{display:'block',margin:'0 auto'}} onClick={signInUsingGoogle}>Google SignIn</Button>
        {
             user && 
             <Alert severity="success">            
            Login Successful ! 
             </Alert>
           
         }
         {
             authError && <Alert severity="error">{authError}</Alert>
         }
                  </form>:
                  <CircularProgress/>
                  }
                </Grid>
                <Grid item={true} xs={12} md={6}>
                <CardMedia component="img" image={loginImg}/>
                </Grid>
            </Grid>:
            navigate('/')
            }
        </Container>
    );
};

export default Login;