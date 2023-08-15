import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BACKEND_API, GET_CART } from '../utils/constants'
import axios from '../api/axios'
import ProductCard from '../components/ProductCard'
// import { setCredentials } from '../utils/loginSlice'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CarouselTransition from '../components/Carousel'
import { setProducts } from '../utils/productSlice'
import ImageZoom from "react-image-zooom";
// import { cacheCartProducts } from '../utils/cartSlice'
import { getCart } from '../features/cart/cartSlice'
import { getProducts } from '../features/products/productSlice'
import { getWishlist } from '../features/wishlist/wishlistSlice'





 const Home = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false)

  // history.replace('/home')
 let dispatch=useDispatch()
 let navigate=useNavigate()
  //access token
  const user=useSelector(store=>store.auth)
  const products=useSelector(store=>store.products)
  const cart=useSelector(store=>store.cart)

// console.log(user?.isLoggedIn)
// console.log(isLoggedIn)
// if(!user?.isLoggedIn){
//   navigate('/login')
// }

  const [isMenFiltered,setIsMenFiltered]=useState(false)
  const [isWomenFiltered,setIsWomenFiltered]=useState(false)
  const [isKidsFiltered,setIsKidsFiltered]=useState(false)
  const [isFiltered,setIsFiltered]=useState(false)




  const [data,setData]=useState([])


// useEffect(()=>{
//   dispatch(setProducts(data))

// },[])




  useEffect(()=>{
        let data={
          userid:user?.user?.id
        }
      dispatch(getCart(data))

  },[])

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  useEffect(()=>{
    dispatch(getWishlist(user?.user?.id))
  },[])

 

  return (
    <div className='border border-x-red-700 mb-[10%] h-screen overflow-x-hidden'>
      <Link to={'/product-page'}>product page</Link>
      <div className=' h-1/2 mt-[1%]'>
        <CarouselTransition />
      </div>
     
      <div className='h-1/2   ms-[10%]  me-[10%] flex flex-col mt-[40%]'>
        


        <div className='  min-1/3 flex justify-center font-sans font-extrabold text-xl'>
          <span className='border'>
            <button
            onClick={()=>{
           const filteredData=products.products.products.filter((product)=>{
                return product.category.category=='Men'
              })
              if(isFiltered){
                setData(products.products) 
                setIsFiltered(false)
              }else{
                setData(filteredData)
                setIsFiltered(true)
              }
              
              
            }}
             className='hover:bg-slate-800 hover:text-white ho px-20 py-1'>Men</button>
            <button 
               onClick={()=>{
                const filteredData=products.products.products.filter((product)=>{
                     return product.category.category=='Women'
                   })
                   if(isFiltered){
                     setData(products.products) 
                     setIsFiltered(false)
                   }else{
                     setData(filteredData)
                     setIsFiltered(true)
                   }
                   
                   
                 }}
            className='hover:bg-slate-800 hover:text-white px-20 py-1'>Women</button>

            <button
            onClick={()=>{
              const filteredData=products.products.products.filter((product)=>{
                   return product.category.category=='Kids'
                 })
                 if(isFiltered){
                   setData(products.products) 
                   setIsFiltered(false)
                 }else{
                   setData(filteredData)
                   setIsFiltered(true)
                 }
                 
                 
               }}
            className='hover:bg-slate-800 hover:text-white px-20 py-1'>Kids</button>

               
          </span>
          <Link to={'/view-all-products'} className="relative left-[20%]">View All Products</Link>
          </div>
         
        <div className=' min-h-fit  flex flex-wrap'>
      {
        products?.products?.products?.map((el)=>{
        
         return <ProductCard products={el} />
         
        })
      }
      </div>


       
    </div>
    </div>
  )
}

export default Home


 