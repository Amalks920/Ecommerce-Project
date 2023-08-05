import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
const PLACE_ORDER_URL='/user/place-order'
const OrderPage = () => {
const userId=useSelector(store=>store.user.id)
const token=useSelector(store=>store.user.token)

let headers;
if (token) {
  headers = {
    Authorization: `Bearer ${token}`,
  };
}

  let data={
    user:userId
    
  }
  
  const placeOrder=async()=>{
    try {
     const response=await axios.post(PLACE_ORDER_URL,data,{headers})
     console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className=' h-screen p-[1%] pt-[8%]'>
        <div className=' border h-full'>
        <div className="grid grid-cols-2 shadow-2xl h-full">
          <div className='flex flex-col'>
            <div className='h-[25%] border border-black w-full'></div>
            <div className='h-[50%] border border-black w-full flex'>
                <div className='border border-green-800 w-1/2'></div>
                
            </div>            
            
              
                

                
             
           

          </div>
 
          <div className='mb-[10%] mt-[5%] mx-[20%] shadow-2xl'>
            <div className='w-full h-full'>
                <h1 className='font-bold text-3xl text-center pt-[15%]'>Order Summary</h1>
                <button onClick={placeOrder} className='bg-slate-600 p-[3%] w-[35%] text-center ms-[33%] mt-[500px]'>Place Order</button>
            </div>
          </div>
</div>
        </div>
    </div>
  )
}

export default OrderPage