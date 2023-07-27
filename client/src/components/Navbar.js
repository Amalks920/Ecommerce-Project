
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser } from '../utils/loginSlice'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
const Navbar = () => {
let user
const navigate=useNavigate()
const dispatch=useDispatch()

user=useSelector((store)=>store.user.user)
console.log(user)


const logout = () =>{
  
   navigate('/login')
  // axios.get('/user/logout')
  // .then((res)=>{
  //   console.log(res)
  //   dispatch(deleteUser())
  //   navigate('/login')

  // })
  // .catch((err)=>{
  //   console.log(err)
  // })

   
}





  
  console.log("user")
  console.log(user)

  return (
    <div className='w-screen h-28 bg-white shadow-2xl flex justify-evenly items-center'>
      <div className='w-1/6'>
        <h1 className='font-bold text-2xl'>E-Comx</h1>
      </div>
      <ul className='flex justify-between w-1/3'>
        <li><Link to={'/login'}>Home</Link></li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      <div className=' p-2 rounded-full w-1/6 h-3/4 flex items-center justify-center'>
        <input className="w-4/5 h-full rounded-l-full p-4 ps-9 shadow-xl" placeholder='Find Products' />
        <button className='bg-green-400 h-full w-1/5 rounded-r-full shadow-xl'>Search</button>
      </div>
     
        {
          
        user ?<button onClick={logout} className='bg-green-500 w-56 h-14'>{`Logout`} </button> :<button className='bg-green-500 w-1/12 h-1/2'><Link to='/login'>Login</Link> </button>
        }
        
    </div>
  )
}

export default Navbar