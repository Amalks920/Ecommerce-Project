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
  
    const saveImg=new imgModel({
        name:req.body.name,
        img:{
            data:fs.readFileSync('upload/'+req.file.filename),
            contentType:"image/png"
        }
    })
    saveImg.save()
    .then((res)=>console.log('image is saved'))
    .catch((err)=>console.log(err))
    // const {productName}=req.body
    //  const {file1,file2,file3}=req.files
    // await file1.mv(path.join(assetsFolder,file1.name))



    // const findProduct=await ProductModel.findOne({productname:productName})
    // console.log(findProduct)
    // if(!findProduct){
        

    //     try {

    //     let product=await ProductModel.create(req.body)
    //     const filenames=await uploadProductImages(req.files)
    //     console.log(filenames)
    //     console.log(product._id)
        
    //     let insertFile=await ProductModel.updateOne({_id:product._id},{$push:{images:{$each:filenames}}})
    //         console.log(insertFile)

    //         res.json({product:product})
    //     } catch (error) {
    //         res.json({error:error.message})
    //     }
    //  }
})

const getAllProducts=asyncHandler(async(req,res,next)=>{
    console.log('console.log()')
    try {
        const images=await imgModel.find()
        console.log(images)
        
        res.json({images:images})
        // const products=await ProductModel.find({})
        // let imageArray=products.map((el)=>el.images)
        
        //   let innerArray=  imageArray.map(el=>(el))
        //     innerArray.map(el=>console.log(el))
            
        //  let imageNameObj=Object.assign({},imageArray)
        //  for(const key in imageNameObj){
        //     imageNameObj[key].map((el)=>{
        //         let imagePath=`${DIR_NAME}/upload/images/${el}`
              
        //        if(fs.existsSync(imagePath)){
        //             fs.readFile(imagePath,(err,data)=>{
        //                 if(err){ res.status(500).json({ message: 'Error occurred while reading the image.' })
        //             }else{

        //                  bufferData.push(data)
        //             }

        //             })
        //        }
               
        //     }
        //         )
        //  }
        
        
          
     

        
        
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