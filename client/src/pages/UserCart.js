

import React, { useState } from "react";

const  UserCart=()=> {
   return (
 <div className=" border border-b-green-800 h-screen w-screen flex items-center justify-center">
    
    <div className=" bg-black min-w-[60%] flex flex-col shadow-2xl p-[2%] w-[2%] rounded-2xl">
    <h1 className="text-center font-bold text-2xl text-white">CART ITEMS</h1>
        <div className="shadow-2xl w-full h-32 my-[2%] flex bg-white rounded-2xl">
            <div className="w-1/5 "><img/></div>

            <div className="w-1/5 flex flex-col justify-center items-center">
                <h1>Product name</h1>
                <p>Description</p>
            </div>

            <div className="w-1/5 flex justify-center items-center">
            <span className=' h-[30%] w-[70%] flex mt-[3%] rounded-md'>
        <button className='bg-slate-400  h-full w-[30%] rounded-md shadow-2xl'>-</button>
        <div className='w-[40%] text-center border-none mt-[3%]'>0</div>
        <button className='bg-slate-400  h-full w-[30%] rounded-md shadow-2xl'>+</button>
      </span>
            </div>

            <div className="w-1/5  flex justify-center items-center">
                <h1 >Price</h1>
            </div>

            <div className="w-1/5  flex justify-center items-center cursor-pointer">
                
                <img src="https://w7.pngwing.com/pngs/378/604/png-transparent-computer-icons-button-x-logo-web-button-symbol-thumbnail.png" width={30} />
                
            </div>
            
        </div>

        
             
    </div>

 </div>
   )
   
}




export default UserCart