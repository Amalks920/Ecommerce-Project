import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
  const [isAccountOverViewOpened,setisAccountViewOpened]=useState(false)
  const [isBuyingOpened,setIsBuyingOpened]=useState(false)
  return (
    <div className='h-screen  flex w-[350px] mt-[110px] rounded-2xl shadow-2xl bg-slate-800'>
      <ul className='w-full text-white mt-[15%] '>
        <li className='ps-16 p-5  hover:text-violet-900 cursor-pointer font-bold text-2xl'>Account Overview</li>
        <li className='ps-16  border-r-8 border-r-violet-900 p-5 hover:text-violet-900 cursor-pointer font-bold text-2xl'><Link
        onClick={()=>{
          
          isBuyingOpened?setIsBuyingOpened(false):setIsBuyingOpened(true)
        }}

       
         to={'/user-dashboard/view-orders-user'}>Buying</Link></li>
         {
           isBuyingOpened && (
            <li className='ps-16 border-r-8 border-r-violet-900 p-5  text-violet-900 text-bold text-xl cursor-pointer font-bold'><Link to={'/user-dashboard/view-orders-user'}>My Purchases</Link></li>

           )
         }
        <li className=' p-5  hover:text-violet-900 cursor-pointer font-bold'><Link to={'/user-dashboard/address'}>Manage Address</Link></li>
        <li className=' p-5  hover:text-violet-900 cursor-pointer font-bold'>My Wishlist</li>
      </ul>
    </div>
  )
}

export default UserSidebar