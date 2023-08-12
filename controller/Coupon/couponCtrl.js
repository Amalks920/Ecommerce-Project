const expressAsyncHandler = require('express-async-handler')
const Coupon=require('../../models/CouponSchema')


const createCoupon=expressAsyncHandler(async(req,res,next)=>{
    try {
        const newCoupon=await Coupon.create(req.body);
        console.log(newCoupon);
        res.status(200).json({response:newCoupon})
    } catch (error) {
        res.status(404).json({err:error})
    }
})


const getAllCoupons = expressAsyncHandler(async (req, res) => {
    try {
      const coupons = await Coupon.find();
      res.status(200).json(coupons);
    } catch (error) {
        res.status(404).json({err:error})
    }
  });

  const updateCoupon = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
   
    try {
      const updatecoupon = await Coupon.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json({response:updatecoupon});
    } catch (error) {
     res.status(404).json({err:error})
    }
  });

  const deleteCoupon = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    // validateMongoDbId(id);
    try {
      const deletecoupon = await Coupon.findByIdAndDelete(id);
      res.json(deletecoupon);
    } catch (error) {
      throw new Error(error);
    }
  });

  const getCoupon = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    // validateMongoDbId(id);
    try {
      const getAcoupon = await Coupon.findById(id);
      res.json(getAcoupon);
    } catch (error) {
      throw new Error(error);
    }
  });



  module.exports = {
    createCoupon,
    getAllCoupons,
    updateCoupon,
    deleteCoupon,
    getCoupon,
  };