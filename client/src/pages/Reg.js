import React, { useEffect } from 'react'
import axios from '../api/axios'

function Reg() {

    useEffect(()=>{
        axios.get('/user/reg')
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