const mongoose=require('mongoose');

const CartSchema=mongoose.Schema({
    products:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"products",
        required:true,
        unique:true      
    },

    quantity:{
        type:Number,
        default:0 
    },

    totalPrice:{
        type:Number,
        default:0
    }

})