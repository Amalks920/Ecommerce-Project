const User=require('../models/userSchema')
const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const AccessToken = require('twilio/lib/jwt/AccessToken')



const authMiddleware=asyncHandler(async (req,res,next)=>{
    
 const authHeader=req.headers['authorization']




 if(!authHeader) return res.status(402).json({msg:'failed'})

 const token=authHeader.split(' ')[1]

 jwt.verify(
    token,
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    (err,decoded)=>{
        
        if(err) return res.json({err:err})
        req.userId=decoded.id
        next()
    }
 )
    
})

module.exports=authMiddleware;