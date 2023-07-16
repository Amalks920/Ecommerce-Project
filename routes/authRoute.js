const express=require('express');
const router=express.Router();
const {createUser,userLogin,handleRefreshToken,
    emailAuthentication,logout}=require('../controller/User/userCtrl');


const authMiddleware=require('../middlewares/authMiddleware')
 const {sendOtp}=require('../config/otpGenerator')



router.post('/register',createUser);
router.post('/login',userLogin)

router.get('/generate-otp',sendOtp)
router.get('/refresh',handleRefreshToken)
router.get('/logout',logout)
router.post('/otp-verification-gmail',emailAuthentication)




module.exports=router;