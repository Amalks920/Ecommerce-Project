import React, { useState } from 'react'
import axios from '../api/axios'


const PrepaidPayment = () => {
    const [paymentOrderRespone,setPaymentOrderResponse]=useState()

    const createPayment=async()=>{
        let data={
            amount:500
        }

        try {
            const response= await axios.post('/user/prepaid',data)
           
            setPaymentOrderResponse(response)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(paymentOrderRespone)




    const paymentHandler = async (e) => {
      
        
        const options = {
          key: process.env.RAZORPAY_API_KEY,
          name: "Your App Name",
          description: "Some Description",
          order_id: paymentOrderRespone.data.response.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `/capture/${paymentId}`;
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




    
  return (
    <div className='mt-[10%] p-[4%] '>
       <button onClick={()=>{
        createPayment()
       }} className='bg-green-700 p-[1%] text-white text-xl hover:bg-green-500'>Prepaid Payment</button> 



<button onClick={()=>{
        paymentHandler()
       }} className='ms-7 bg-green-700 p-[1%] text-white text-xl hover:bg-green-500'>Prepaid Payment</button> 
        </div>
       


       
 
  )
}

export default PrepaidPayment