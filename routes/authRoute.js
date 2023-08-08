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

const { 
  getCartDetails,img,decreaseCartCount,increaseCartCount,
  deleteCartProduct
}=require('../controller/Product/cartController')
const handleRefreshToken = require("../config/refreshToken");
const authMiddleware = require("../middlewares/authMiddleware");
const { sendOtp } = require("../config/otpGenerator");
const { addAddress,getAddress } = require("../controller/User/addressCtrl");
const {createOrder,editOrderStatus,getOrder}=require('../controller/Product/OrderController')


// router.get("/reg", authMiddleware, (req, res) => {
//   // console.log(req.body)
//   res.json({ msg: "success" });
// });
router.get("/refresh", handleRefreshToken);
router.post("/register", createUser);
router.post("/login", userLogin);
router.post("/otp-verification-gmail", emailAuthentication);
router.get("/generate-otp", sendOtp);
router.post('/otp-login',otpLogin)
router.post('/otp',verifyOtp)
router.post('/create-new-password',createPassword)

//cart 
router.post("/add-to-cart",authMiddleware,addToCart);
router.post('/get-cart-details',authMiddleware,getCartDetails);
router.post('/decrease-cart-count',authMiddleware,decreaseCartCount);
router.post('/increase-cart-count',authMiddleware,increaseCartCount);
router.post('/delete-cart-product',authMiddleware,deleteCartProduct);
router.get('/get-address/:id',authMiddleware,getAddress)
// router.post('/image',img);

//Address
router.post('/add-address',authMiddleware,addAddress)
router.get('/get-address/:id',getAddress)

//Orders
router.post('/place-order',authMiddleware,createOrder)
router.post('/edit-order-status',authMiddleware,editOrderStatus)
router.get('/get-order/:id',getOrder)


//  router.use(authMiddleware)
router.get("/logout", logout);

module.exports = router;
