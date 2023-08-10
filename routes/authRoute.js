const express = require("express");
const router = express.Router();
const {
  createUser,
  userLogin,
  emailAuthentication,
  otpLogin,
  createPassword,
  verifyOtp,
  logout,
} = require("../controller/User/userCtrl");

const {
  addToCart,
  
}=require('../controller/Product/cartController')

const {whatsappOtp, sendSmsOtp}=require('../config/twilio')

const { 
  getCartDetails,decreaseCartCount,increaseCartCount,
  deleteCartProduct
}=require('../controller/Product/cartController')
const handleRefreshToken = require("../config/refreshToken");
const authMiddleware = require("../middlewares/authMiddleware");
const { sendOtp } = require("../config/otpGenerator");
const { addAddress,getAddress } = require("../controller/User/addressCtrl");

const {createOrder,editOrderStatus,
  getOrder,deleteOrder}=require('../controller/Product/OrderController');

  const {razorPay,capturePayment}=require('../controller/User/paymentCtrl')



const {upload}=require('../config/multer')
const {img}=require('../controller/imgCtrl');
const expressAsyncHandler = require("express-async-handler");



router.get("/refresh", handleRefreshToken);
router.post("/register", createUser);
router.post("/login", userLogin);
router.post("/otp-verification-gmail", emailAuthentication);
router.get("/generate-otp", sendOtp);
router.post('/otp-login',otpLogin)
router.post('/otp',verifyOtp)
router.post('/create-new-password',createPassword)
router.get('/send-sms-otp',sendSmsOtp)

//cart 
router.post("/add-to-cart",authMiddleware,addToCart);
router.post('/get-cart-details',authMiddleware,getCartDetails);
router.post('/decrease-cart-count',authMiddleware,decreaseCartCount);
router.post('/increase-cart-count',authMiddleware,increaseCartCount);
router.post('/delete-cart-product',authMiddleware,deleteCartProduct);
router.get('/get-address/:id',authMiddleware,getAddress)

// router.post('/image',upload.single('my_file'),img);

//Address
router.post('/add-address',authMiddleware,addAddress)
router.get('/get-address/:id',getAddress)

//Orders
router.post('/place-order',authMiddleware,createOrder)
router.post('/edit-order-status',authMiddleware,editOrderStatus)
router.get('/get-order/:id',authMiddleware,getOrder)
router.delete('/delete-order/:id',authMiddleware,deleteOrder)


router.post('/prepaid',razorPay)
router.post('/capture/:paymentId',capturePayment)

//  router.use(authMiddleware)
router.get("/logout", logout);

module.exports = router;
