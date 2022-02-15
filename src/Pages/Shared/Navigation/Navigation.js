import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const {user,logOut} = useAuth();
  const navigate=useNavigate();
  const handleAppointmentButton=()=>{
     navigate('/appointment')
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Button color="inherit" variant="text" onClick={handleAppointmentButton}>Appointment</Button>
           { user?
          <>
           <NavLink sx={{color:'white',mx:5}} to='/dashboard'>Dashboard</NavLink>
           <Button color="inherit" variant="contained" onClick={logOut}  sx={{backgroundColor:'black'}}>LogOut</Button>
          </>
           :
           <Button color="inherit" variant="contained" onClick={()=>navigate('/login')} sx={{backgroundColor:'black'}}>Login</Button>}
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;