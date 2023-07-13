const ProductModel=require('../../models/productSchema');
const asyncHandler=require('express-async-handler');


const addProduct=asyncHandler(async(req,res,next)=>{
    const prodcutname=req.body.productname;
    console.log(req.body.prodcutname)
    const findProdcut=await Pr.findOne({prodcutname:prodcutname})
   
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


module.exports={addProduct}