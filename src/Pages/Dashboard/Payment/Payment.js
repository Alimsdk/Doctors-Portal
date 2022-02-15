import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KNJQJEBC7LLKMASzSSpgPebxCnD5b5Reptd0ghibsecXGLYyLJagCVpaxVNURTwK9jpEjNEP2mI3q6sfbPLtoc300Gf3s81eB')

const Payment = () => {
    const {id}=useParams();
    const [appointment,setAppointment]=useState();
    

    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${id}`)
        .then(res=>res.json())
        .then(data=>setAppointment(data));
    },[])
    return (
        <div>
            <h2>coming soon : {id}</h2>
            <h5>Price : ${appointment?.price}</h5>
           {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment}/>
    </Elements>}
        </div>
    );
};

export default Payment;