const expressAsyncHandler = require("express-async-handler");
const mongoose=require('mongoose')
const OrderSchema = require("../../models/OrderSchema");
const CartSchema = require("../../models/CartSchema");
const AddressSchema = require("../../models/AddressSchema");
const { update } = require("lodash");
const ObjectId=mongoose.Types.ObjectId

const createOrder=expressAsyncHandler(async(req,res,next)=>{
    try {
    let cart=await CartSchema.findOne({user:req.body.user})
    
        .populate('products.productId')
        // let newOrder=await OrderSchema.create(req.body)
       const order=await CartSchema.aggregate()
       .project({
        products:1,_id:-1
       })
       .unwind('products')
       .project({
        productId:"$products.productId",quantity:"$products.count",
        
       })
       .lookup({
        from:'products',
        localField:'productId',
        foreignField:'_id',
        as:'price'
       })
       .project({
        productId:1,
        quantity:1,
        price:{
            $map:{
                input:"$price",
                as:"item",
                in:"$$item.price"
            }
        }
       })
       .project({
        productId:1,
        quantity:1,
        price:{$arrayElemAt: ['$price', 0] }
       })

    


       const address=await AddressSchema.findOne({user:req.body.user})


       let userId=new ObjectId(req.body.user)
       console.log(userId)
       let newOrder=await OrderSchema.create({
        user:req.body.user,
        
            items:order,
            address:address._id
        
        
     } )

     console.log(newOrder)
        console.log(req.body.user+"useeer")
    const deleteCart=await CartSchema.deleteOne({user:req.body.user})
    res.json({isDeleted:true})
    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"error ocuured while deleting"})
    }
})

const getAllOrders=expressAsyncHandler(async(req,res,next)=>{
    try {
        const allOrders=await OrderSchema.find({}).populate('address')

        console.log(allOrders)
         res.json({response:allOrders})
    } catch (error) {
        console.log(error.message)
        res.json({err:error})
    }
})

const editOrderStatus=expressAsyncHandler(async(req,res,next)=>{
    console.log(req.body)
    const {orderId,status}=req.body;
    try {
    const updatedOrder=await OrderSchema.findByIdAndUpdate(orderId,{orderStatus:status})
    console.log(updatedOrder)
    } catch (error) {
        console.log(error)
    }
    
})


const getOrder=expressAsyncHandler(async(req,res,next)=>{
    console.log(req.params.id)

    try {
        const dbResponse=await OrderSchema.find({user:req.params.id}).populate('items.productId')
        console.log('orderschema')
        console.log(dbResponse)
    res.json({response:dbResponse})
    } catch (error) {
        return res.status(400).json({ error: 'cannot find orders' })

    }
})


const deleteOrder=expressAsyncHandler(async(req,res,next)=>{
    console.log(req.params.id)

    try {
     const deletedOrder=await OrderSchema.deleteOne({_id:req.params.id})
     console.log(deletedOrder)
     res.json({msg:deletedOrder})
    } catch (error) {
        console.log(error)
    }
})


module.exports={
    createOrder,
    getAllOrders,
    editOrderStatus,
    getOrder,deleteOrder
}