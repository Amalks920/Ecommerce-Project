import { Button } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createWishlist, getWishlist } from '../features/wishlist/wishlistSlice'
import { isPromise } from 'formik'
import { ToastContainer, toast } from 'react-toastify'



const ProductCard = (props) => {

  const userId=useSelector(store=>store.auth.user.id)
  const wishlist=useSelector(store=>store.wishlist)



 
  let dispatch=useDispatch()



  
  const addToWishlist=(productId)=>{


    let data={  
      user:userId,
      products:productId,
    }
    //dispatch(getWishlist(userId))
       dispatch(createWishlist(data))
      
      
  }
 
  const {_id,productName,price,image,brandName}=props.products
  return (
    
    <div className="relative m-10  flex w-full max-w-xs flex-col overflow-hidden rounded-lg min-h-fit border border-gray-100 bg-white shadow-md">
      
    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
     
      <img className="object-cover" src={image} width={1000} height={30} alt="product image" />
      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
    </a>
      
    <div className="mt-4 px-5 pb-5">
  <a href="#">
    <h5 className="text-xl tracking-tight text-slate-500 uppercase font-bold">{productName}</h5>
  </a>

  <div className="mt-2 mb-5 flex items-center justify-between">
  <p>
    <span className="text-3xl font-bold text-blue-900">${price}</span>
    
  </p>
  <ToastContainer/>
  <Button
  onClick={()=>{
    addToWishlist(_id)
  }}
   className='rounded-full' color='red' ripple={true}>Wishlist</Button>
</div>

<div className="flex items-center">


</div>

<Link to={`/product-page/${_id}`}  className="flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
>
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    Add to cart
  </Link>
</div>

  </div>
 
  
  )
}

export default ProductCard


/* <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg> */