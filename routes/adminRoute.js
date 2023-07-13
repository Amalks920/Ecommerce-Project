const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware')

//user management
const {getAllUsers,getUser,deleteUser,
    updateUser,
    isAdmin,blockUser,
    unBlockUser}=require('../controller/Admin/adminCtrl');

router.get('/get-all-users',authMiddleware,isAdmin,getAllUsers)
router.get('/get-a-user/:id',authMiddleware,isAdmin,getUser)
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)
router.put('/block-user/:id',blockUser)
router.put('/unblock-user/:id',unBlockUser)


//product management
const {addProduct,getAllProducts,getAProduct,
       deleteProduct,updateProduct
}=require('../controller/Product/productCtrl')

router.post('/add-product',addProduct)
router.get('/get-all-products',getAllProducts)
router.get('/get-a-product/:id',getAProduct)
router.delete('/delete-a-product/:id',deleteProduct)
router.put('/update-product/:id',updateProduct)



module.exports=router;  