import React from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../utils/loginSlice'

const Sidebar = () => {
  const navigate=useNavigate()
const dispatch=useDispatch()


const logout = () =>{
  
  
  axios.get('/user/logout')
  .then((res)=>{
    console.log(res)
    dispatch(logout)
    navigate('/admin/admin-login')

  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className='w-80 h-screen border bg-black pt-16 fixed   text-white'>
    <ul className='border-b-2 p-5 font-mono items-start  flex flex-col justify-start w-full text-lg'>
      <Link className='w-full pb-10' to="/"><li className='ps-24 w-full hover:text-black p-3 hover:border hover:bg-slate-100'>Dashboard</li></Link>
      <Link to={'/admin/view-orders'} className='w-full pb-10' ><li className=' p-3 ps-24  w-full hover:text-black  hover:border hover:bg-slate-100'>Orders</li></Link>
     <Link to={'/admin/product-dashboard'} className='w-full pb-10' ><li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'>Products</li></Link>
     <Link to={'/admin/user-management'}  className='w-full pb-10' ><li className=' p-3 ps-24  w-full hover:text-black    hover:border hover:bg-slate-100'>Customers</li></Link>
     <Link to={'/admin/add-category'} className='w-full pb-10' ><li className=' p-3 ps-24  w-full hover:text-black    hover:border hover:bg-slate-100'>Category</li></Link>
     <Link className='w-full pb-10' ><li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'>Products</li></Link>
    {/* <li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'><buttton  onClick={logout}  className="">Logout</buttton></li> */}



    </ul>

   
  </div>
  )
}

export default Sidebar