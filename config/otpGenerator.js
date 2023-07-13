const bcrypt=require('bcrypt');
const lodash=require('lodash');
const otpGenerator=require('otp-generator')
const Otp=require('../models/otpSchema')

const {TWILIO_SERVICE_SID,TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN}=process.env;
const client=require('twilio')(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,{
    lazyLoading:true
})


const sendOtp= async (req,res,next)=>{
    const {phonenumber}=req.body
   

    

        try {
            let a=await client.verify.
         
            v2.services(TWILIO_SERVICE_SID)
             .verifications
            .create({
                to:`+${phonenumber}`,
                channel:"sms",
                
            })
            console.log(a)
            res.status(200)
            .send({success:true,message:`otp send successfully!, payload:${a}`})

            
        } catch (error) {
            res.status(500).send({
                success: false,
                message: `Error in sending otp: ${error}`,
              });
            
        }
    }

module.exports={sendOtp};