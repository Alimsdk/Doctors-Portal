import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import {CircularProgress} from '@mui/material'
const CheckoutForm = ({appointment}) => {
    console.log('inside appointment',appointment);
    const {_id,price,patientName,patientEmail}=appointment;
    const [error,setError]=useState('');
    const stripe=useStripe();
    const elements=useElements();
    const [success,setSuccess]=useState('');
  const [processing,setProcessing]=useState(false);
    const [clientSecret,setClientSecret]=useState();

    useEffect(()=>{
         fetch('http://localhost:5000/create-payment-intent',{
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify({price})
         })
         .then(res=>res.json())
         .then(data=>setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card=elements.getElement(CardElement);
        if(card===null){
            return;
        }

        setProcessing(true);

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            setError(error.message);
            setSuccess('');
        }else{
            console.log(paymentMethod);

            setError('');
        }
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
           clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name:patientName,
                  email:patientEmail ,
                },
              },
            },
          );

          if(intentError){
              setError(intentError.message);
              setSuccess('');
          }else{
              setError('');
              console.log(paymentIntent);
              setSuccess('your payment proceed successfully');
              setProcessing(false);
              const url=`http://localhost:5000/appointments/${_id}`
              const payment={
                  amount:paymentIntent.amount,
                  transaction:paymentIntent.client_secret.slice('_secret')[0]
              }
              fetch(url,{
                  method:'PUT',
                  headers:{
                      'content-type':'application/json'
                  },
                  body:JSON.stringify(payment)
              }).then(res=>res.json()).then(data=>console.log(data))
          }

    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
       {processing?  <CircularProgress></CircularProgress>  : <button type="submit" disabled={!stripe || success}>
          Pay {appointment?.price}
        </button>}
        {error && <p style={{color:'red'}}>{error}</p> }
        {success && <p style={{color:'green'}}>{success}</p>}
      </form>
    );
};

export default CheckoutForm;