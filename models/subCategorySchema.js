const mongoose=require('mongoose')


const SubCategorySchema=mongoose.Schema({
    subcategory:{
        type:String,
        required:true,
        unique:true
    }
})


module.exports=mongoose.model('Subcategory',SubCategorySchema)