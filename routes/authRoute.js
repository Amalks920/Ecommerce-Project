const express=require('express');
const router=express.Router();
const {createUser,userLogin,generateOtp}=require('../controller/User/userCtrl');


const authMiddleware=require('../middlewares/authMiddleware')
 const {sendOtp}=require('../config/otpGenerator')



router.post('/register',createUser);
router.post('/login',userLogin)

router.post('/generate-otp',sendOtp)




module.exports=router;