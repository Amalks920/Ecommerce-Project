const User=require('../models/userSchema')
const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')



const authMiddleware=asyncHandler(async (req,res,next)=>{
    
 const authHeader=req.headers['authorization']

 if(!authHeader) return res.sendStatus(401)
 console.log(authHeader)
 const token=authHeader.split(' ')[1]
 console.log('token')
 console.log(token)

 jwt.verify(
    token,
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    (err,decoded)=>{
        if(err) return res.sendStatus(403)
        req.userid=decoded.id
        next()
    }
 )
    
})

module.exports=authMiddleware;