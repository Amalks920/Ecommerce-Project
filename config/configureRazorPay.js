const Razorpay=require('razorpay')


var configureRazorPay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });


  module.exports=configureRazorPay