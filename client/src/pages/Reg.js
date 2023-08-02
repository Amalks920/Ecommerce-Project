import React, { useEffect } from 'react'
import axios from '../api/axios'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Reg() {
  console.log(useLocation)
  let token=useSelector(store=>store.user.token)

    // useEffect(()=>{
    //   let headers={
    //     'Authorization':`Bearer ${token}`
    //   }
    //     axios.get('/user/reg',{headers})
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .then((err)=>{
    //         console.log(err)
    //     })
    // })
  return (
   <div className='mt-[20%] border border-black'>hello</div>

  )
}

export default Reg