const mongoose=require('mongoose');


const CategorySchema=mongoose.Schema({
    category:{
        type:String,
        required:true,
        unique:true
    },
    subCategory:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:"Subcategory",
        required:true,
        unique:true
    }
})


module.exports=mongoose.model('Category',CategorySchema)