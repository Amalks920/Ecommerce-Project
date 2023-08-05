import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AdminHome = () => {
  const [data,setData]=useState([])



  // useEffect(()=>{
  //   axios.get('admin/get-image')
  //   .then((res)=>{
  //     setData(res.data.res)
  //   }
  //   )
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // },[])
  return (

    <div className='flex'>
     
     
      
      
    </div>
  )
}

