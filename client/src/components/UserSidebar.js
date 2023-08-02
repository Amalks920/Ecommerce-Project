import React from 'react'

const UserSidebar = () => {
  return (
    <div className='h-[700px] flex w-1/6 mt-[110px] shadow-2xl bg-slate-800'>
      <ul className='border w-full text-center mt-[15%] text-white '>
        <li className='border p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>Account Overview</li>
        <li className='border p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>My Orders</li>
        <li className='border p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>Manage Address</li>
        <li className='border p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>My Wishlist</li>
      </ul>
    </div>
  )
}

export default UserSidebar