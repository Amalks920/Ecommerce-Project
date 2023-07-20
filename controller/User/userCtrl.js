const User=require('../../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// const {createOtp}=require('../config/otpGenerator')
 const {generateToken}=require('../../config/generateToken')
const {Auth}=require("two-step-auth")
const {sendOtp}=require('../../config/otpGenerator');
const {EMAIL,PASSWORD}=require('../../utils/emailAuth')
const nodemailer=require('nodemailer')
const MailGen=require('mailgen')
const otpGenerator = require('otp-generator');



const saltRounds = 10;

const createUser=asyncHandler(async(req,res)=>{

const {name,email,phone,password}=req.body
let findUser
console.log('signup finduser')
console.log(findUser)
   
    if(!findUser){
        try {
        let user=await User.create(req.body)
        
             res.status(201).json({"name":user.name,"email":user.email,"mobile":user.mobile})

        } catch (error) {
            console.log('db error')
            console.log(error)
            res.status(401).json({code:error.status,msg:error.message})
        }
    
         
    }else{
        res.json({
            message:"user already exists",
            success:false,
        })
    }
}
)

const userLogin=asyncHandler(async (req,res,next)=>{
    const {email,password}=req.body
    //check if user exist or not
    console.log(email)
    try {
       let findUser=await User.findOne({email:email})
        console.log(User.isPasswordMatched)
        if(findUser && (await findUser.isPasswordMatched(password)) ){   
            console.log('helloo0000000')
        const accessToken=generateToken(findUser?._id,process.env.ACCESS_TOKEN_PRIVATE_KEY,'1d')
        const refreshToken=generateToken(findUser?._id,process.env.REFRESH_TOKEN_PRIVATE_KEY,'1d')
            console.log(accessToken,refreshToken)
        const updateUser=await User.findByIdAndUpdate(
            findUser._id,
            {
                refreshToken:refreshToken
            },
            {
                new:true
            }
        )
        res.cookie('jwt',refreshToken,{
            httpOnly:true,
            maxAge:24*60*60*1000
        })
        const {    
            email,
            isBlocked,
            mobile,
            name,
            role
          } = findUser;
            
                res.json({              
                    email:email,isBlocked:isBlocked,
                    mobile:mobile,name:name,role:role,
                    accessToken:accessToken
                })
               
        }else{
            console.log('login hit')
          res.json({msg:"invalid credentials"})
        }
        
        
    } catch (error) {
        console.log('hellllo')
        res.json({error:error.message})
    }
   
    
  
}

)
const logout=asyncHandler(async (req,res,next)=>{
    const token=req.cookies['jwt']
    console.log(token)
    if(!token){
        console.log('no token available in cookies')
        res.status(201).json({msg:"no cookies"})
    }

    try {

        const user=await User.findOne({refreshToken:token})
        console.log("user")
        console.log(user)

        
        
    } catch (error) {
        res.clearCookie('jwt',{httpOnly:true,maxAge:24*60*60*1000})
        
    }
    console.log('updated')
    let loggoutUser=await User.findOneAndUpdate({refreshToken:token},{refreshToken:null},{new:true})
    res.clearCookie('jwt',{httpOnly:true,maxAge:24*60*60*1000})
        res.json({msg:"user loggedout"})
    console.log(loggoutUser);
    
    


    // if(token){
    //     res.clearCookie('x-access-token',{
    //         httpOnly:true,
    //         secure:true
    //     })
    //     res.json({msg:"cookies cleared"})
    // }else{
    //     res.json({msg:"already logout"})
    // }
   
})


 //authentication using real gmail

const emailAuthentication=(req,res)=>{
    const {userEmail}=req.body


    let config={
        service:"gmail",
        auth:{
            user:EMAIL,
            pass:PASSWORD
        }
    }

    let transporter=nodemailer.createTransport(config)
   
    let MailGenerator=new MailGen({
        theme:'default',
        product:{
            name:"Mailgen",
            link:"https://mailgen.js/"
        }
    })


    let response={
        body:{
            Email:userEmail,
            intro:`Your OTP ${otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false, digits:true })}`,
            
            outro:"Expires within 10 minuites"

        }
    }   
    
    let mail=MailGenerator.generate(response)

   let message={
    from:EMAIL,
    to:userEmail,
    subject:"Your OTP",
    html:mail
   }

   transporter.sendMail(message).then(()=>{
    return res.status(201).json({
        msg:"you should receive an email"
    })
   }).catch(error=>{
    return res.status(500).json({error})
   })
}






 




module.exports={
    createUser,userLogin,
  
    emailAuthentication,
    logout
}


