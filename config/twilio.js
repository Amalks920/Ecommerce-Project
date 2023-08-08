// const {TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,TWILIO_SERVICE_SID }=process.env
// const client=require('twilio')(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,{lazyLoading:true})
// const cl=require('twilio')(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN);

const accountSid = 'AC1a733906b678ccbc4a3b2fdf9aeb9f93';
const authToken = 'e58b27b428b626dc121c52527c8b8e11';
const client = require('twilio')(accountSid, authToken);

const sendSmsOtp=async(req,res,next)=>{
  
    client.messages
    .create({
        body: 'Your Twilio code is 1238432',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917025769349'
    })
    .then(message => console.log(message.sid))
    
    // const whatsappOtp=cl.messages
    // .create({
    //     body: 'Your Twilio code is 1238432',
    //     from: 'whatsapp:+14155238886',
    //     to: 'whatsapp:+917025769349'
    // })
    // .then(message => console.log(message.sid))
    // .catch(e=>console.log(e))
module.exports={
    sendSmsOtp
}
}


module.exports={sendSmsOtp}


