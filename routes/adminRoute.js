const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware')
const {upload}=require('../config/multer')

//user management
const {getAllUsers,getUser,deleteUser,
    updateUser,
    isAdmin,blockUser,getImage,addCategory,
    unBlockUser}=require('../controller/Admin/adminCtrl');

const {addProduct}=require('../controller/Product/productCtrl')

router.get('/get-all-users',authMiddleware,getAllUsers)
router.get('/get-a-user/:id',authMiddleware,isAdmin,getUser)
router.delete('/:id',authMiddleware,deleteUser)
router.put('/:id',authMiddleware,updateUser)
router.put('/block-user/:id',blockUser)
router.put('/unblock-user/:id',unBlockUser)


router.post('/add-product',addProduct)
//


// router.get('/get-image',getImage)
router.post('/add-category',authMiddleware,addCategory);


module.exports=router;  