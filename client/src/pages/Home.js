import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BACKEND_API } from '../utils/constants'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { setCredentials } from '../utils/loginSlice'
import { Link, useLocation } from 'react-router-dom'
import CarouselTransition from '../components/Carousel'
import { setProducts } from '../utils/productSlice'

const URL=`${BACKEND_API}/admin/get-all-products`

 const Home = () => {
 let dispatch=useDispatch()
  //access token
  const token=useSelector(store=>store.user.token)

  const [data,setData]=useState([])

  


useEffect(()=>{
  dispatch(setProducts(data))

})

  let headers
  if(token){
     headers={
      'Authorization':`Bearer ${token}`
    }
  }

  useEffect(()=>{
    axios.get(URL,{headers})
    .then((res)=>{

      setData(res.data.products)
       
    })
  .catch((err)=>console.log(err.message))
  },[])


  return (
    <div className='border border-x-red-700 h-screen'>
      <Link to={'/product-page'}>product page</Link>
      <div className=' h-1/2 mt-[5%]'>
        <CarouselTransition />
      </div>
      
      <div className='h-1/2 border border-black ms-[10%] me-[10%] flex flex-col mt-[10%]'>
        
        <div className='border border-black h-1/3 flex justify-center font-sans font-extrabold text-xl'>
          <h1>Top Rated</h1>
          </div>

        <div className='border border-black flex flex-wrap'>
      {
        data.map((el)=>{
        
         return <ProductCard products={el} />
         
        })
      }
      </div>

</div>
     
     
     
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