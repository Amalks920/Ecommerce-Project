const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({

    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
        required:true,
    },

    items:[
     {
      productId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Product",
        required:true,
     },
     quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
      }
    ],
    orderStatus:{
        type:String,
        enum:["pending","delivered","placed","cancelled"],
        default:"pending"
    },
    totalAmount:{
        type:Number,
        // required:true,
        min:0
    },
    paymentMode:{
        type:String,
        default:'COD'
        // required:true
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    address:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Address'
        // required:true
    },
    createdAt:{
        type:Date,
        default:()=>{
         Date.now()
        }
    }
})


module.exports=mongoose.model('Order',OrderSchema)