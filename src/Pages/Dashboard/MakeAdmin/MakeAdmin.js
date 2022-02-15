import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth'

const MakeAdmin = () => {
    const [admin,setAdmin]=useState("");
    const [success,setSuccess]=useState(false);
    const {token} = useAuth();

    const handleOnBlur=e=>{
        setAdmin(e.target.value);
    }
    const handleAdminSubmit=e=>{
        const user={email:admin}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
            setSuccess(true);
            }else{
                setSuccess(false);
            }
        });
        setAdmin('');
        e.preventDefault();
        
    }
    return (
        <div>
            <h2>make admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField onBlur={handleOnBlur} label="Email" type="email" variant="standard" />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
             success && 
             <Alert severity="success">            
            Registration Successful ! 
             </Alert>
           
         }
        </div>
    );
};

export default MakeAdmin;