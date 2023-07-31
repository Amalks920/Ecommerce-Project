const expressAsyncHandler = require("express-async-handler");
const CartSchema = require("../../models/CartSchema");
const userSchema = require("../../models/userSchema");
const productSchema = require("../../models/productSchema");
const cloudinary=require('../../cloudinary/cloudinary')


const getCartDetails=expressAsyncHandler(async(req,res,next)=>{
    const user=await userSchema.findById(req.body.userid)
    const cart=await user.populate('cart')
    
    
    // const products=cart.cart.products.map(async (el)=>{
    //      console.log(el.productId)
    //      await productSchema.findById(el.productId)
    // }
    // )
    // console.log(products)
    console.log(cart);
    res.json({cart:cart})

})

const img=expressAsyncHandler(async(req,res,next)=>{
    
        const {image}=req.body
        
      try {
        let cloud=await  cloudinary.uploader.upload(
          image,
       {timeout: 60000}
        
      );
      console.log(cloud);
        
      } catch (error) {
        console.log(error)
      } 
     

        
})


module.exports={
    getCartDetails,
    img
}

