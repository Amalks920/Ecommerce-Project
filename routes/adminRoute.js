const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware')

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


module.exports=router;