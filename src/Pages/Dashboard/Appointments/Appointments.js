import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Appointments = ({date}) => {
    const newDate=date.toLocaleDateString();
    const [appointments,setAppointments]=useState(null);
    
    const {user}=useAuth();
    useEffect(()=>{
        const url=`http://localhost:5000/appointments?email=${user.email}&date=${newDate}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAppointments(data)});
    },[date])
    return (       

        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
         
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments?.map((row) => (
                
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.patientName}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell  align="right">{row.payment? 'Paid' : <Link style={{cursor:'pointer'}} to={`/dashboard/payment/${row._id}`} >Pay Now</Link> }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        
    );
};

export default Appointments;