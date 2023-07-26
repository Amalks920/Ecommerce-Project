const User=require('../models/userSchema')
const jwt=require('jsonwebtoken')

const handleRefreshToken=async (req,res,next)=>{

    const cookies=req.cookies

    if(!cookies?.jwt) return res.status(401)

    const refreshToken=cookies.jwt

    try {
        const foundUser=await User.findOne({refreshToken:refreshToken})
          
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
            (err,decoded)=>{ 
              if(err || foundUser._id!=decoded.id) return res.status(403)
              const accessToken=jwt.sign(
                {id:decoded.id},
                process.env.ACCESS_TOKEN_PRIVATE_KEY,
                {expiresIn:"1d"}
              )
              res.json({accessToken})
            }
        )

        
    } catch (error) {
            res.json({err:error})
    }

   
    

    
}

module.exports=handleRefreshToken;