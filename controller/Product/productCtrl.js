const ProductModel=require('../../models/productSchema');
const asyncHandler=require('express-async-handler');
const path=require('path');
const DIR_NAME= require('../../constants');
const {fileSchema}=require('../../models/productImgSchema')
const {uploadProductImages}=require('../../utils/uploadProductImages');
const { Console } = require('console');



const assetsFolder=path.join(DIR_NAME,"upload/images/")



const addProduct=asyncHandler(async(req,res,next)=>{
    const {productName}=req.body
    console.log('req.body');
    console.log(req.body)
    console.log(req.files)
        // console.log(await req.files.file1.mv(assetsFolder,'img'))
        

    const findProduct=await ProductModel.findOne({productname:productName})
    console.log(findProduct)
    if(!findProduct){
        

        try {

        let product=await ProductModel.create(req.body)
        const filenames=await uploadProductImages(req.files)
        console.log(filenames)
        console.log(product._id)
        
        let insertFile=await ProductModel.updateOne({_id:product._id},{$push:{images:{$each:filenames}}})
            console.log(insertFile)

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