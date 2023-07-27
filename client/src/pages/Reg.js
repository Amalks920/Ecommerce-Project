import React, { useEffect } from 'react'
import axios from '../api/axios'
import { useSelector } from 'react-redux'

function Reg() {
  let token=useSelector(store=>store.user.token)

    useEffect(()=>{
      let headers={
        'Authorization':`Bearer ${token}`
      }
        axios.get('/user/reg',{headers})
        .then((res)=>{
            console.log(res)
        })
        .then((err)=>{
            console.log(err)
        })
    })
  return (
    <div>Reg</div>
  )
}

export default Reg