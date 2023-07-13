const express=require('express');
const router=express.Router();
const {createUser,userLogin,generateOtp,handleRefreshToken,logout}=require('../controller/User/userCtrl');


const authMiddleware=require('../middlewares/authMiddleware')
 const {sendOtp}=require('../config/otpGenerator')



router.post('/register',createUser);
router.post('/login',userLogin)

router.post('/generate-otp',sendOtp)
router.get('/refresh',handleRefreshToken)
router.get('/logout',logout)




module.exports=router;