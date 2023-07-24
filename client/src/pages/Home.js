import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BACKEND_API } from '../utils/constants'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const URL=`${BACKEND_API}/admin/get-all-products`

 const Home = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(URL)
    .then((res)=>{
     
      console.log(res.data.products)
      setData(res.data.products)
       
    })
  .catch((err)=>console.log(err.message))
  },[])
  console.log(data)
  
  
    // const user=useSelector((store)=>store.user.user)

  return (
    <div>
      {
        data.map((el)=>{
          console.log(el)
         return  <ProductCard products={el} />
        })
      }
     
     
    </div>
  )
}

export default Home

 /* {
        data.map((singleData)=>{
          const base64String=btoa(
            String.fromCharCode(...new Uint8Array(()))
          )
        })
      } */