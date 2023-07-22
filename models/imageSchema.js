const mongoose=require('mongoose');

let imgSchema=new mongoose.Schema({
    name:String,
    img:{
        data:Buffer,
        contentType:String
    }
})
imgSchema=mongoose.model('Image',imgSchema)

module.exports=imgSchema
