const mongoose=require('mongoose')

const Otp=new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }
}
  
)

module.exports=mongoose.model('Otp',Otp)