const User=require('../../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// const {createOtp}=require('../config/otpGenerator')
 const generateToken=require('../../config/generateToken')
const {Auth}=require("two-step-auth")
const {sendOtp}=require('../../config/otpGenerator');
const {EMAIL,PASSWORD}=require('../../utils/emailAuth')
const nodemailer=require('nodemailer')
const MailGen=require('mailgen')
const otpGenerator = require('otp-generator');
const Otp=require('../../models/otpSchema');
const expressAsyncHandler = require('express-async-handler');
const userSchema = require('../../models/userSchema');



const saltRounds = 10;

const createUser=asyncHandler(async(req,res)=>{
console.log(req.body);
const {name,email,phone,password}=req.body
let findUser
console.log('signup finduser')
console.log(findUser)
   
    if(!findUser){
        
        try {
        let user=await User.create(req.body)

        if(!user.name || !user.email || !user.mobile || !user.password) res.status(402).json({err:"something missing"})
        
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


//                        USER LOGIN

const userLogin=asyncHandler(async (req,res,next)=>{
    const {email,password}=req.body
    //check if user exist or not
    try {
       let findUser=await User.findOne({email:email})
       

       
       if(findUser?.isBlocked===true){
        res.status(401).json({msg:"user is blocked"})
       }  

        //validate the password
        if(findUser && (await findUser.isPasswordMatched(password)) ){   

           //generate accessToken and refreshToken
           //passing id as payload for generate jwt api 
        const accessToken=generateToken(findUser?._id,process.env.ACCESS_TOKEN_PRIVATE_KEY,'1d')
        
        const refreshToken=generateToken(findUser?._id,process.env.REFRESH_TOKEN_PRIVATE_KEY,'1d')
      
            //save the refresh token in the database for future reference
        const updateUser=await User.findByIdAndUpdate(
            findUser._id,
            {refreshToken:refreshToken},
            {new:true}
        )
        
        //setting cookies with jwt token,also setting the flag httpOnly to true
        //it will make the cookies more secure and can't be accesses using
        //javascript in client side
        //also set the expiry of the cookie
        res.cookie('jwt',refreshToken,{
            httpOnly:true,
            maxAge:24*60*60*1000
        })

        //destructuring finduser to get details of user 
        const { _id,email,isBlocked,mobile,name,role} = findUser;
            

        //send response to client side
        res.json({              
        email:email,isBlocked:isBlocked,
        mobile:mobile,name:name,role:role,
        accessToken:accessToken,id:_id,
        refreshToken:refreshToken
                })
               
        }else{   
        //if user doesn't exist send error
          res.status(401).json({msg:"invalid credentials"})
        }  
    } catch (error) {
        res.status(401).json({error:error.message})
    } 
}
)


//              OTP LOGIN

const otpLogin=asyncHandler(async(req,res,next)=>{
    if(req.body.userEmail){
        res.json({msg:'success'})
    }
})

const verifyOtp=asyncHandler(async(req,res,next)=>{


        try {

            const otp=await Otp.findOne({otp:req.body.otp})

            const findUser=await User.find({email:otp.Email})

            const accessToken=generateToken(findUser?._id,process.env.ACCESS_TOKEN_PRIVATE_KEY,'1d')
        
        const refreshToken=generateToken(findUser?._id,process.env.REFRESH_TOKEN_PRIVATE_KEY,'1d')
      

            //save the refresh token in the database for future reference
        const updateUser=await User.findByIdAndUpdate(
            findUser._id,
            {refreshToken:refreshToken},
            {new:true}
        )

        res.cookie('jwt',refreshToken,{
            httpOnly:true,
            maxAge:24*60*60*1000
        })

        //destructuring finduser to get details of user 
        const { _id,email,isBlocked,mobile,name,role} = findUser;
            

        //send response to client side
        res.json({              
        email:email,isBlocked:isBlocked,
        mobile:mobile,name:name,role:role,
        accessToken:accessToken,id:_id
                })
            
            
        } catch (error) {

            res.sendStatus(404)
            
        }
       


})



const logout=asyncHandler(async (req,res,next)=>{
    console.log(req.cookies)
    const token=req.headers['authorization']
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
        res.status(200).json({msg:"user loggedout"})
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
    console.log(EMAIL,PASSWORD)
    console.log(userEmail)
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


    let otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false, digits:true })
    console.log(otp);
    let response={
        body:{
            Email:userEmail,
            intro:`Your OTP ${otp})}`,
            
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

   transporter.sendMail(message).then(async ()=>{
    console.log(otp)
  const createOtpDb=await Otp.create({Email:EMAIL,otp:otp})
    return res.status(201).json({
        msg:"you should receive an email",
        otp:otp
    })
   }).catch(error=>{
    console.log(error.message)
    return res.json({error})
   })
}


const createPassword=expressAsyncHandler(async(req,res,next)=>{
    const {oldPassword,newPassword,email}=req.body;
    console.log(oldPassword,newPassword)
    console.log(req.body);

    if(oldPassword===newPassword){ 
        return res.status(400).json({ error: 'New password must be different from the current password.' })
    }

    if(email){
        try {
        const user=await userSchema.findOne({email:email})

        if(await user.isPasswordMatched(oldPassword)){

            const hashedNewPassword=await bcrypt.hash(newPassword,10)
            console.log(hashedNewPassword)
            
            const updatePassword=await userSchema.updateOne({email:email},{password:hashedNewPassword})

        }else{
            return res.status(400).json({ error: 'old password incorrect.' })

        }
        
        } catch (error) {
        console.log(error)
        }
    }


})





 




module.exports={
    createUser,userLogin,
    verifyOtp,
    emailAuthentication,
    logout,
    otpLogin,createPassword
}


