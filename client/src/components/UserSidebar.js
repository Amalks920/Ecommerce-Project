import React from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
  return (
    <div className='h-screen flex w-1/5 mt-[110px] shadow-2xl bg-slate-800'>
      <ul className='w-full text-white text-center mt-[15%] '>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>Account Overview</li>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>My Orders</li>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'><Link to={'/user-dashboard/address'}>Manage Address</Link></li>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>My Wishlist</li>
      </ul>
    </div>
  )
}

export default UserSidebar