import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWishlist,getWishlist } from '../features/wishlist/wishlistSlice'
import EcommerceCard from '../components/ProdCard'

const Wishlist = () => {
  const wishlist=useSelector(store=>store.wishlist)
  const user=useSelector(store=>store.auth)
  const dispatch=useDispatch()

  console.log('eooewoshlis')
  console.log(wishlist)



 


  return (
    <div className='ms-[20%] me-[4%] p-16 mt-[10%] border border-black w-screen h-fit'>
        <h1 className='font-bold text-2xl font-serif'>My Wishlist</h1>
        <div className='flex gap-20 flex-wrap'>
          {
            wishlist?.wishlist?.map((el)=>{
                
           
          return <EcommerceCard  el={el} userId={user?.user?.id} />
        })
          }
        </div>
    </div>
  )
}

export default Wishlist