const expressAsyncHandler = require("express-async-handler");
const configureRazorPay=require('../../config/configureRazorPay')

const razorPay=expressAsyncHandler(async(req,res,next)=>{
    var options = {
        amount: req.body.amount, 
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      try {
        const order=await configureRazorPay.orders.create(options);
        console.log(order)
        res.status(200).json({response:order})
      } catch (error) {
        console.log('rr')
        console.log(error)
      }
})

const capturePayment=expressAsyncHandler(async(req,res,next)=>{
  try {
    return request(
     {
     method: "POST",
     url: `https://${process.env.RAZOR_PAY_API_KEY}:${config.RAZOR_PAY_API_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
     form: {
        amount: 10 * 100, // amount == Rs 10 // Same As Order amount
        currency: "INR",
      },
    },
   async function (err, response, body) {
     if (err) {
      return res.status(500).json({
         message: "Something Went Wrong",
       }); 
     }
      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
      return res.status(200).json(body);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
   });
  }

})

module.exports={razorPay,capturePayment}