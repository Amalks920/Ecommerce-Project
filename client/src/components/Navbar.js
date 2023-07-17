
import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'

const Navbar = () => {
let user
user=useSelector((store)=>store.user)






  
  console.log("user")
  console.log(user)

  return (
    <div className='w-screen h-28 bg-white shadow-2xl flex justify-evenly items-center'>
      <div className='w-1/6'>
        <h1 className='font-bold text-2xl'>E-Comax</h1>
      </div>
      <ul className='flex justify-between w-1/3'>
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      <div className=' p-2 rounded-full w-1/6 h-3/4 flex items-center justify-center'>
        <input className="w-4/5 h-full rounded-l-full p-4 ps-9 shadow-xl" placeholder='Find Products' />
        <button className='bg-green-400 h-full w-1/5 rounded-r-full shadow-xl'>Search</button>
      </div>
         <h1>{user && user.username}</h1>
    </div>
  )
}

export default Navbar