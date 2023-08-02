

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { get } from "react-hook-form";
const GET_CART_DETAILS=`/user/get-cart-details`
const  UserCart=()=> {
    const dispatch=useDispatch()

    const token=useSelector(store=>store.user.token);
    const cart=useSelector(store=>store.cart)
    const user=useSelector(store=>store.user)
    console.log(user.id)
    console.log(token)

    let headers;
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }

//update cart count

useEffect(()=>{
    getCartDetails()
},[])

    const getCartDetails=async()=>{
        try {
           const result= await axios.post(GET_CART_DETAILS,{userid:user.id},{headers})
           console.log(result.data.cart)
           
        } catch (error) {
           console.log(error)
        }
        
    }



  
    cart.cart.map((el)=>{
        console.log(el)
    })
   return (
 <div className=" border border-b-green-800 h-screen w-screen flex items-center justify-center">
    
    <div className=" bg-black min-w-[60%] flex flex-col shadow-2xl p-[2%] w-[2%] rounded-2xl">
    <h1 className="text-center font-bold text-2xl text-white">CART ITEMS</h1>

    {
        cart.cart.map((el)=>{

       return el.map((el)=>{

       
         return  <div className="shadow-2xl w-full h-32 my-[2%] flex bg-white rounded-2xl">
         <div className="w-1/5 "><img className="rounded-full m-[15%]" src={el.image} width={50} height={50}/></div>

         <div className="w-1/5 flex flex-col justify-center items-center">
             <h1>{el.productName}</h1>
             
         </div>

         <div className="w-1/5 flex justify-center items-center">
         <span className=' h-[30%] w-[70%] flex mt-[3%] rounded-md'>
     <button className='bg-slate-400  h-full w-[30%] rounded-md shadow-2xl'>-</button>
     <div className='w-[40%] text-center border-none mt-[3%]'>0</div>
     <button  className='bg-slate-400  h-full w-[30%] rounded-md shadow-2xl'>+</button>
   </span>
         </div>

         <div className="w-1/5  flex justify-center items-center">
             <h1 >{el.price}</h1>
         </div>

         <div className="w-1/5  flex justify-center items-center cursor-pointer">
             
             <img src="https://w7.pngwing.com/pngs/378/604/png-transparent-computer-icons-button-x-logo-web-button-symbol-thumbnail.png" width={30} />
             
         </div>
         
     </div>
      })

})

    }
       

        
             
    </div>

 </div>
   )
   
}




export default UserCart