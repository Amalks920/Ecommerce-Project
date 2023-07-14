const ProductModel=require('../../models/productSchema');
const asyncHandler=require('express-async-handler');


const addProduct=asyncHandler(async(req,res,next)=>{
    console.log('heio')
    const prodcutname=req.body.productname;
    console.log(req.body)
    const findProdcut=await ProductModel.findOne({prodcutname:prodcutname})
   
    if(!findProdcut){

        try {

        let product=await ProductModel.create(req.body)
            res.json({product:product})
        } catch (error) {
            res.json({error:error.message})
        }
    
         
    }else{
        res.json({
            message:"product already exists",
            success:false,
        })
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