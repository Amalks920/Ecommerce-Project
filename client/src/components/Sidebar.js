import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-80 h-screen border bg-black pt-16 fixed   text-white'>
    <ul className='border-b-2 p-5 font-mono items-start  flex flex-col justify-start w-full text-lg'>
      <Link className='w-full pb-10' to="/"><li className='ps-24 w-full hover:text-black p-3 hover:border hover:bg-slate-100'>Dashboard</li></Link>
      <Link className='w-full pb-10' to={'/admin/add-product'}><li className=' p-3 ps-24  w-full hover:text-black  hover:border hover:bg-slate-100'>Orders</li></Link>
     <Link to={'/admin/add-product'} className='w-full pb-10' ><li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'>Products</li></Link>
     <Link to={'/admin/user-management'}  className='w-full pb-10' ><li className=' p-3 ps-24  w-full hover:text-black    hover:border hover:bg-slate-100'>Customers</li></Link>
     <Link className='w-full pb-10' ><li className=' p-3 ps-24  w-full hover:text-black    hover:border hover:bg-slate-100'>Products</li></Link>
     <Link className='w-full pb-10' ><li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'>Products</li></Link>




    </ul>

   
  </div>
  )
}

export default Sidebar