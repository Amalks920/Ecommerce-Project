

import React from 'react'

const AdminNavbar = () => {
  return (
    <div className='w-screen flex justify-around ms-[320px] pt-[2%] h-[150px] p-5  fixed bg-white shadow-2xl'>
       <h1 className='text-3xl font-bold'>ADMIN</h1>
       <button className='bg-slate-800 h-16 w-[8%] text-white text-xl font-bold'>Logout</button>
    </div>
  )
}

export default AdminNavbar
