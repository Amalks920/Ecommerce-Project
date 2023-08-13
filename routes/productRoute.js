const express=require('express');
const router=express.Router();


const authMiddleware = require("../middlewares/authMiddleware");

//product management
const {addProduct,getAllProducts,getAProduct,
    deleteProduct,updateProduct
}=require('../controller/Product/productCtrl');



router.get('/get-all-products',getAllProducts)
router.get('/get-a-product/:id',getAProduct)
router.put('/delete-a-product/:id',deleteProduct)
router.put('/update-product/:id',updateProduct)


module.exports=router; 