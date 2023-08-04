import React from 'react'

const OrderPage = () => {
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
                <button className='bg-slate-600 p-[3%] w-[35%] text-center ms-[33%] mt-[500px]'>Place Order</button>
            </div>
          </div>
</div>
        </div>
    </div>
  )
}

export default OrderPage