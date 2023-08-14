import React, { useState } from 'react'
import axios from '../api/axios'
// import Razorpay from 'razorpay';



export const createPayment=async(totalprice)=>{
    let data={
        amount:totalprice*100
    }

    try {
        const response= await axios.post('/user/prepaid',data)
        console.log(response)
        return response
    } catch (error) {
        return error
    }
}

export const Payment = async (orderId) => {
      
        
    const options = {
      key: process.env.RAZORPAY_API_KEY,
      name: "Your App Name",
      description: "Some Description",
      order_id: orderId,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `/user/capture/${paymentId}`;
         const captureResponse = await axios.post(url, {})
         console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    };


