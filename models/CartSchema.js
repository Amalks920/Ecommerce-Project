const mongoose=require('mongoose');

const CartSchema=new mongoose.Schema({
    products:[{
        productId:{
        type:[mongoose.SchemaTypes.ObjectId],
        required:true,
        unique:true    
        }  
    }],

    quantity:{
        type:Number,
        default:0 
    },

    totalPrice:{
        type:Number,
        default:0
    }

})

CartSchema.methods.sayHi=function(){
    // return `myr ${name}`
    
}

module.exports=mongoose.model('Cart',CartSchema);


