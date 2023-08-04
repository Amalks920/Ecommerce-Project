const expressAsyncHandler = require('express-async-handler')
const AddresSchema=require('../../models/AddressSchema')
const AddressSchema = require('../../models/AddressSchema')



const addAddress=expressAsyncHandler(async(req,res,next)=>{
    const {userId}=req.body
    console.log(req.body)
    let address
    try {

        const address=await AddresSchema.create(req.body)
       
        res.json({address:"success"})
        
    } catch (error) {
        console.log(error)
    }
})


const getAddress=expressAsyncHandler(async(req,res,next)=>{

    try {
        const address=await AddressSchema.find({user:req.params.id})
        console.log(address)
        res.json({address:address})
    } catch (error) {
        console.log(error)
    }
})



module.exports={
    addAddress,getAddress
}