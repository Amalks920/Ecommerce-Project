const ProductModel=require('../../models/productSchema');
const asyncHandler=require('express-async-handler');
const path=require('path');
const DIR_NAME= require('../../constants');
const {fileSchema}=require('../../models/productImgSchema')



const assetsFolder=path.join(DIR_NAME,"upload/images")



const addProduct=asyncHandler(async(req,res,next)=>{
    const {productName}=req.body;
    console.log(req.body)
    // const {file1,file2,file3}=req.files
    console.log(req.files)


    console.log(productName);
   

    const findProduct=await ProductModel.findOne({productname:productName})
    console.log(findProduct)
    if(!findProduct){
        res.json({msg:"success"})

        try {

        let product=await ProductModel.create(req.files)
            res.json({product:product})
        } catch (error) {
            res.json({error:error.message})
        }
    
         
    // }else{
    //     res.json({
    //         message:"product already exists",
    //         success:false,
    //     })
     }
})

const getAllProducts=asyncHandler(async(req,res,next)=>{
    try {
        const products=await ProductModel.find({})

        res.json({prodcucts:products})
        
    } catch (error) {
        res.json({error:error.message})
    }
  
    
}

)


const getAProduct=asyncHandler(async (req,res,next)=>{
    console.log('hello')
try {
    const product=await ProductModel.findById(req.params.id)
    res.json({product:product})

} catch (error) {
    res.json({error:error.message})
}
})

const deleteProduct=asyncHandler(async (req,res,next)=>{

    try {
        const deleteProduct=await ProductModel.findOneAndDelete(req.params.id)
        res.json({deleteProduct})
    } catch (error) {
      
        res.json({error:error.message})
    }
    })



const updateProduct=asyncHandler(async (req,res,next)=>{
       const {id}=req.body
try {
    const updateProduct=await ProductModel.findOneAndUpdate(
       { id },
       req.body,
    {
        new:true,
    }
    )
    res.json({updateProduct})

} catch (error) {
    res.json({error:error.message})
}
})




module.exports={addProduct,getAllProducts,getAProduct,
                deleteProduct,updateProduct
}