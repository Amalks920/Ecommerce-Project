const {Schema,model}=require('mongoose')

otp=model('Otp',Schema({
    number:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{type:Date,default:Date.now,index:{expires:300}}
},
    {timestamps:true}   
))