const mongoose=require('mongoose');

const CartSchema=new mongoose.Schema({
    products:[{
        productId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        unique:true    
        },
        count:{
            type:Number,
            default:0
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


