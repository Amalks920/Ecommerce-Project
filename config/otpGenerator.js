const bcrypt=require('bcrypt');
const lodash=require('lodash');
const otpGenerator=require('otp-generator')
const Otp=require('../models/otpSchema')


const {TWILIO_SERVICE_SID,TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN}=process.env;
const client=require('twilio')(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,{
    lazyLoading:true
})


const sendOtp= async (req,res,next)=>{
    

    // Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC1a733906b678ccbc4a3b2fdf9aeb9f93";
const authToken = "e3aa3e76af7e09ad632f7fd87caa1e90";
const verifySid = "VA994a4647f40fc7c67372ac4a2ee6b724";
const client = require("twilio")(accountSid, authToken);

await client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+917025769349", channel: "sms" })
  .then((verification) => console.log("verification status"+verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+917025769349", code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  });
}


module.exports={sendOtp};