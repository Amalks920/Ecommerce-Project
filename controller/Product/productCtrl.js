const ProductModel=require('../../models/productSchema');
const asyncHandler=require('express-async-handler');
const path=require('path');
const DIR_NAME= require('../../constants'); 
const {uploadProductImages}=require('../../utils/uploadProductImages');
const fs=require('node:fs')
const {upload}=require('../../config/multer')
const imgModel=require('../../models/imageSchema');



const assetsFolder=path.join(DIR_NAME,"upload/images/")



const addProduct=asyncHandler(async(req,res,next)=>{
    
   console.log('hmmme')
     const {productName}=req.body
    //  const {file1,file2,file3}=req.files
    // await file1.mv(path.join(assetsFolder,file1.name))

console.log(req.body)

    const findProduct=await ProductModel.findOne({productName:productName})
    console.log(findProduct)
    if(!findProduct){
        

        try {
            // const saveImg=await new imgModel({
            //     name:req.body.name,
            //     img:{
            //         data:fs.readFileSync('upload/'+req.file.filename),
            //         contentType:"image/png"
            //     }
            // })
            //  saveImg.save()
            // .then((response)=>{
            //     console.log(response)
            //     console.log('image is saved')
            // })
            // .catch((err)=>console.log(err))

        let product=await ProductModel.create(req.body)
        // const filenames=await uploadProductImages(req.files)
        
        console.log(product._id)
        
        // let insertFile=await ProductModel.updateOne({_id:product._id},{$push:{images:{$each:filenames}}})
        //     console.log(insertFile)

            res.json({product:product})
        } catch (error) {
            res.json({error:error.message})
        }
    
     }
    }
)

const getAllProducts=asyncHandler(async(req,res,next)=>{
    console.log('console.log()')
    try {
        const allProducts=await ProductModel.find({})
        // const images=await imgModel.find()
        console.log(allProducts)
        
        res.json({products:allProducts})
        

        
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
      
        res.status(403).json({error:error.message})
    }
    })



const updateProduct=asyncHandler(async (req,res,next)=>{
    console.log(req.files)
       const {id}=req.body
       console.log('inside update product')
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