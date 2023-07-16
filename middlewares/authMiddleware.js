const User=require('../models/userSchema')
const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')



const authMiddleware=asyncHandler(async (req,res,next)=>{
    
    let token=req.cookies['x-access-token'];
    console.log(token)


    if(token){
        const decoded=jwt.verify(token,process.env.PRIVATE_KEY)
           
                    try {
                        const user=await User.findById(decoded?.id)
                        next()
        
                    } catch (error) {
                        res.json({err:error?.message})
                    }

    }else{
          throw new Error("There is no token attached to header")

    }
    
})

module.exports=authMiddleware;