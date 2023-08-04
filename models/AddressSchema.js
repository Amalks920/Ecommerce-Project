const mongoose=require('mongoose');

const AddresSchema=new mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    alternativenumber:{
        type:Number,

    }
})

module.exports=mongoose.model('Address',AddresSchema);
