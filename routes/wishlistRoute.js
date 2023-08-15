const express=require('express')
const router=express.Router()
const {createWishlist,getWishlist, deleteWishlistProduct}=require('../controller/Wishlist/wishlistCtrl')

router.post('/create-wishlist',createWishlist)
router.get('/get-wishlist/:id',getWishlist)
router.post('/delete-wishlist-product/:id',deleteWishlistProduct)



module.exports=router