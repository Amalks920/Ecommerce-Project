const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware')
const {upload}=require('../config/multer')

//user management
const {getAllUsers,getUser,deleteUser,
    updateUser,
    isAdmin,blockUser,getImage,addCategory,
    unBlockUser}=require('../controller/Admin/adminCtrl');

    //order

    const {getAllOrders}=require('../controller/Product/OrderController')

router.get('/hi',(req,res,next)=>{
    res.json({'users':['userone','usertwo','userthree']})
})
router.get('/get-all-users',authMiddleware,getAllUsers)
router.get('/get-a-user/:id',authMiddleware,isAdmin,getUser)
router.delete('/:id',authMiddleware,deleteUser)
router.put('/:id',authMiddleware,updateUser)
router.put('/block-user/:id',blockUser)
router.put('/unblock-user/:id',unBlockUser)


//product management
const {addProduct,getAllProducts,getAProduct,
       deleteProduct,updateProduct
}=require('../controller/Product/productCtrl');

router.post('/add-product',addProduct)
//

router.get('/get-all-products',authMiddleware,getAllProducts)
router.get('/get-a-product/:id',getAProduct)
router.put('/delete-a-product/:id',deleteProduct)
router.put('/update-product/:id',updateProduct)
// router.get('/get-image',getImage)
router.post('/add-category',authMiddleware,addCategory);

//orders

router.get('/get-all-orders',getAllOrders)



module.exports=router;  