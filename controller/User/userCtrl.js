const User=require('../../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const generateToken=require('../../config/jwtToken')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// const {createOtp}=require('../config/otpGenerator')
const {generateRefreshToken}=require('../../config/refreshToken')
const {Auth}=require("two-step-auth")
const {sendOtp}=require('../../config/otpGenerator')




const saltRounds = 10;


const createUser=asyncHandler(async(req,res)=>{
    

    const email=req.body.email;
    console.log(req.body.email)
    const findUser=await User.findOne({email:email})
   
    if(!findUser){

        try {

        let user=await User.create(req.body)
            res.json({user:user})
        } catch (error) {
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

const userLogin=async (req,res,next)=>{

    

    
    
    const {email,password}=req.body
    //check if user exist or not
    try {
        findUser=await User.findOne({email})
        if(findUser && (await findUser.isPasswordMatched(password)) ){

        const refreshToken= generateRefreshToken(findUser?._id)
        const updateUser=await User.findByIdAndUpdate(
            findUser._id,
            {
                refreshToken:refreshToken
            },
            {
                new:true
            }
        )
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            maxAge:72*60*60*1000
        })
            
                res.json({
                    _id:findUser._id,
                    name:findUser.firstname,
                    email:findUser.email,
                    username:findUser.username,
                    token:refreshToken,
                })
        }else{
           throw new Error('Invalid Credentials')
        }
        
        
    } catch (error) {
        res.json({error:error.message})
    }
   
    
    
}

const logout=asyncHandler(async (req,res,next)=>{
    const cookie=req.cookies;
    if(!cookie?.refreshToken) throw Error('No refresh token in cookies')
    const refreshToken=cookie.refreshToken
    const user=await User.findOne({refreshToken})
    console.log(user)
    if(!user){
        res.clearCookie('refreshToken',{
            httpOnly:true,
            secure:true,
        })
         res.sendStatus(204);
    }
    await User.findOneAndUpdate({refreshToken},{
        refreshToken:""
    })
    res.clearCookie('refreshToken',{
        httpOnly:true,
        secure:true,
    })
     res.sendStatus(204);

})


 const handleRefreshToken=async (req,res,next)=>{
    const cookies=req.cookies
    if(!cookies?.refreshToken) throw new Error('No refresh token in cookies')
    const refreshToken=cookies.refreshToken
    const user=await User.findOne({refreshToken})
    if(!user) throw new Error('No user matched with the given refresh token')

    
    jwt.verify(refreshToken,process.env.PRIVATE_KEY,(err,decoded)=>{
        
        if(err || user._id!=decoded.id) throw new Error('There is something wrong')
        
        const accessToken=generateToken(user?._id)
        res.json({accessToken})
    })
    

 }





 const emailAuth= async (req,res,next)=>{
  let emailId="Amalks920@gmail.com"

  try {
    const resp = await Auth(emailId);
    console.log(resp);
  console.log(resp.mail);
  console.log(resp.OTP);
  console.log(resp.success);
    
  } catch (error) {
        res.json({err:error})
    
  }
  // You can follow this approach,
  // but the second approach is suggested,
  // as the mails will be treated as important
  
     
   }




module.exports={
    createUser,userLogin,
    emailAuth,handleRefreshToken,
    logout
}


