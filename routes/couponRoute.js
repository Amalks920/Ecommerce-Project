const express = require("express");
const router = express.Router();

const {
    createCoupon,
    getAllCoupons,
    updateCoupon,
    deleteCoupon,
  } = require("../controller/Coupon/couponCtrl");

  const authMiddleware=require('../middlewares/authMiddleware')

router.post("/", authMiddleware, createCoupon);
router.get("/get-all-coupons", authMiddleware, getAllCoupons);
router.get("/get-all-coupons/:id", authMiddleware, getAllCoupons);
router.put("/:id", authMiddleware, updateCoupon);
router.delete("/:id", authMiddleware, deleteCoupon);


module.exports=router