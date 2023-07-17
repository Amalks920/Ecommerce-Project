const User=require('../../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const generateToken=require('../../config/jwtToken')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// const {createOtp}=require('../config/otpGenerator')
const {generateRefreshToken}=require('../../config/refreshToken')
const {Auth}=require("two-step-auth")
const {sendOtp}=require('../../config/otpGenerator');
const {EMAIL,PASSWORD}=require('../../utils/emailAuth')
const nodemailer=require('nodemailer')
const MailGen=require('mailgen')
const otpGenerator = require('otp-generator')


const saltRounds = 10;

const createUser=asyncHandler(async(req,res)=>{
    console.log('hello from server')
    const {name,email,phone,password}=req.body
    
    console.log(req.body)

    let findUser

    
         findUser=await User.findOne({email:email})

        
  
   
    if(!findUser){
        console.log('hellll')
        console.log(req.body)
        try {

        let user=await User.create(req.body)
        console.log(user)
             res.status(201).json({"name":user.name,"email":user.email,"mobile":user.mobile})
        } catch (error) {
            console.log('db error')
            console.log(error.message)
            res.json({error:error.message})
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
    try {
        findUser=await User.findOne({email})
        if(findUser && (await findUser.isPasswordMatched(password)) ){

        const refreshToken=generateRefreshToken(findUser?._id)
        // const updateUser=await User.findByIdAndUpdate(
        //     findUser._id,
        //     {
        //         refreshToken:refreshToken
        //     },
        //     {
        //         new:true
        //     }
        // )
        res.cookie('x-access-token',refreshToken,{
            httpOnly:true,
            maxAge:72*60*60*1000
        })
            
                res.json({
                    
                    "user":findUser
                })
               
        }else{
           throw new Error('Invalid Credentials')
        }
        
        
    } catch (error) {
        res.json({error:error.message})
    }
   
    
    
}
)
const logout=asyncHandler(async (req,res,next)=>{
    const token=req.cookies['x-access-token']
    console.log(token)

    if(token){
        res.clearCookie('x-access-token',{
            httpOnly:true,
            secure:true
        })
        res.json({msg:"cookies cleared"})
    }else{
        res.json({msg:"already logout"})
    }
   
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


