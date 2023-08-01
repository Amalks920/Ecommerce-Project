const mongoose=require('mongoose');


const CategorySchema=mongoose.Schema({
    category:{
        type:String,
        required:true,
      
    },
    subCategory:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:"Subcategory",
        required:true,
       
    }
})


module.exports=mongoose.model('Category',CategorySchema)