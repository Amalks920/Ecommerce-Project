const mongoose=require('mongoose');


const CartSchema=new mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    
    products:[{
        productId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Product',
        required:true,
        unique:true    
        },
        count:{
            type:Number,
            default:1
        },
        _id:{
             type: mongoose.Schema.Types.ObjectId, required: false
        }  
    }]

})

CartSchema.methods.sayHi=function(){
    // return `myr ${name}`
    
}

module.exports=mongoose.model('Cart',CartSchema);


