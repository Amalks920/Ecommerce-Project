const express=require('express');
const router=express.Router();
const {createUser,userLogin,
    emailAuthentication,logout}=require('../controller/User/userCtrl');

const handleRefreshToken=require('../config/refreshToken')


const authMiddleware=require('../middlewares/authMiddleware')
 const {sendOtp}=require('../config/otpGenerator')


router.get('/reg',authMiddleware,(req,res)=>{
    // console.log(req.body)
    res.json({msg:"success"})
})
router.get('/refresh',handleRefreshToken)
router.post('/register',createUser);
router.post('/login',userLogin)
router.post('/otp-verification-gmail',emailAuthentication)
router.get('/generate-otp',sendOtp)

//  router.use(authMiddleware)
router.get('/logout',logout)





module.exports=router;