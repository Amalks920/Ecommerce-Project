const express=require('express');
const router=express.Router();
const {createUser,userLogin,getAllUsers,
       getUser,deleteUser,updateUser,
       isAdmin,generateOtp}=require('../controller/userCtrl');
const authMiddleware=require('../middlewares/authMiddleware')
const {sendOtp}=require('../config/otpGenerator')



router.post('/register',createUser);
router.post('/login',userLogin)
router.get('/get-all-users',authMiddleware,isAdmin,getAllUsers)
router.get('/get-a-user/:id',authMiddleware,isAdmin,getUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)
router.post('/generate-otp',sendOtp)


module.exports=router;