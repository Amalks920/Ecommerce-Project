import React from 'react'

const UserSidebar = () => {
  return (
    <div className='h-[700px] flex w-1/6 mt-[110px] shadow-2xl bg-slate-800'>
      <ul className='w-full text-white text-center mt-[15%] '>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>Account Overview</li>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>My Orders</li>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>Manage Address</li>
        <li className=' p-5 hover:bg-white hover:text-black cursor-pointer font-bold'>My Wishlist</li>
      </ul>
    </div>
  )
}

export default UserSidebar