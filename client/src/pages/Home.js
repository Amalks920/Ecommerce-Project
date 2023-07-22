import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BACKEND_API } from '../utils/constants'
import axios from 'axios'

const URL=`${BACKEND_API}/admin/get-all-products`

 const Home = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(URL)
    .then((res)=>{
      console.log("hellres");
      console.log(res.data)
      setData(res.data)
       
    })
  .catch((err)=>console.log(err.message))
  })
  console.log(data)
  
  
    // const user=useSelector((store)=>store.user.user)

  return (
    <div>
      <h1>Hello</h1>
      {/* {
        data.map((singleData)=>{
          const base64String=btoa(
            String.fromCharCode(...new Uint8Array(()))
          )
        })
      } */}
    </div>
  )
}

export default Home

