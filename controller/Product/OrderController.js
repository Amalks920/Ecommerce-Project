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
        productId:"$products.productId",count:"$products.count",
        
       })
       .lookup({
        from:'products',
        localField:'productId',
        foreignField:'_id',
        as:'price'
       })
       .project({
        productId:1,
        count:1,
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
        count:1,
        price:{$arrayElemAt: ['$price', 0] }
       })

       console.log(order)

       console.log("order")
       console.log(order)


       const address=await AddressSchema.findOne({user:req.body.user})
       console.log(address._id)

       let userId=new ObjectId(req.body.user)

       let newOrder=await OrderSchema.create({
        user:userId,
        
            items:order,
            address:address._id
        
        
     } )
        console.log(newOrder)
    const deleteCart=await CartSchema.deleteOne({user:userId})
    console.log(deleteCart)
    } catch (error) {
        console.log(error)
    }
})

const getAllOrders=expressAsyncHandler(async(req,res,next)=>{
    try {
        const allOrders=await OrderSchema.find({}).populate('address')
        // aggregate().project({
        //     user:1,
        //     productId:"$items.productId",
        //     orderStatus:1,
        //     address:1,
        //     isPaid:1
        // })
        // .lookup({
        //     from:"products",
        //     localField:'productId',
        //     foreignField:"_id",
        //     as:"products"
        // })
        // .lookup({
        //     from:"addresses",
        //     localField:"address",
        //     foreignField:"_id",
        //     as:"address"
        // })
        // .project(
        //     {
        //         productName:"$products"
        //     }
        // )
        
        // .populate('items.productId').populate('address')
        
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


module.exports={
    createOrder,
    getAllOrders,
    editOrderStatus
}