const expressAsyncHandler = require("express-async-handler");
const CartSchema = require("../../models/CartSchema");
const userSchema = require("../../models/userSchema");
const productSchema = require("../../models/productSchema");
const cloudinary = require("../../cloudinary/cloudinary");
const mongoose=require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

const getCartDetails = expressAsyncHandler(async (req, res, next) => {
  // const user = await userSchema.findById(req.body.userid);
  // const cart = await user.populate("cart");

  const cart= await CartSchema.findOne({user:req.body.userid})
  console.log('carttt')
  console.log(await cart.populate('products.productId'))
    console.log(cart.products)

    res.json({cart:cart.products})
  
});

const img = expressAsyncHandler(async (req, res, next) => {
  const { image } = req.body;

  try {
    let cloud = await cloudinary.uploader.upload(image, { timeout: 60000 });
    console.log(cloud);
  } catch (error) {
    console.log(error);
  }
});



//ADD TO CART

const addToCart=expressAsyncHandler(async(req,res,next)=>{
const {productId,userId}=req.body
let CartExist

  try {

    //find if a cart already Exist for the user
    CartExist=await CartSchema.findOne({user:userId})
    console.log(CartExist)


  } catch (error) {  
    res.json({err:error})
  }


  if(!CartExist){
   
    try {

      const cart= await CartSchema.create({user:userId,products:[{productId:new ObjectId(productId)}]})
    
      
    } catch (error) {
      console.log(error)
    }
  }else{

    let findProduct
    
    try {
      console.log('find');
       findProduct=await CartSchema.findOne({"products.productId":productId})
      console.log(findProduct)
      
    } catch (error) {
        console.log(error)
    }

    if(findProduct){
      console.log('find product');
      let prodId=productId
      
      // console.log(findProduct.products.includes({prodId}))
      const indexOfProduct = findProduct.products.findIndex(product => product.productId.toString() === prodId);
      console.log(indexOfProduct)

      if(indexOfProduct!=-1){
        findProduct.products[indexOfProduct].count++
        await findProduct.save()
        
      }


      
       
        // await findProduct.save()
    }else{
      const pushToCart= await CartSchema.findOne({user:userId})
      // const pushItem=await CartSchema.updateOne({user:userId},{productId:{$push:{productId}}})
      console.log('push to cart');
      console.log(pushToCart.products.push({productId:productId}))
      await pushToCart.save()
    }

  }




   



})

const decreaseCartCount=expressAsyncHandler(async(req,res,next)=>{

  let findCart
  try {
    console.log(req.body.userId)
     findCart=await CartSchema.findOne({user:req.body.userId})
    console.log(findCart)
  } catch (error) {
    console.log(error)
  }

  if(findCart){
    try {
      const indexOfProduct = findCart.products.findIndex(product => product.productId.toString() === req.body.productId);
      console.log(indexOfProduct)

      if(indexOfProduct!=-1){
        findCart.products[indexOfProduct].count--
        await findCart.save()

        res.json({count:findCart.products[indexOfProduct].count})
      }
    } catch (error) {
      console.log(error)
    }
  }
})

const deleteCartProduct=expressAsyncHandler(async(req,res,next)=>{
  const {userId,productId}=req.body
try {

  const cart=await CartSchema.findOne({user:userId})
  console.log(cart)
  const indexOfProduct = cart.products.findIndex(product => product.productId.toString() === req.body.productId);
  console.log(indexOfProduct)
  cart.products.splice(indexOfProduct,1)

  await cart.save()
  res.json({isDeleted:true})
} catch (error) {
  res.sendStatus(404)
}
  
})



//INCREASE THE COUNT

const increaseCartCount=expressAsyncHandler(async(req,res,next)=>{

  let findCart
  try {
    console.log(req.body.userId)
     findCart=await CartSchema.findOne({user:req.body.userId})
    console.log(findCart)
  } catch (error) {
    console.log(error)
  }

  if(findCart){
    try {
      const indexOfProduct = findCart.products.findIndex(product => product.productId.toString() === req.body.productId);
      console.log(indexOfProduct)

      if(indexOfProduct!=-1){
        findCart.products[indexOfProduct].count++
        await findCart.save()

        res.json({count:findCart.products[indexOfProduct].count})
      }
    } catch (error) {
      console.log(error)
    }
  }
})



module.exports = {
  getCartDetails,
  img,decreaseCartCount,
  deleteCartProduct,
  increaseCartCount,
  addToCart
};
