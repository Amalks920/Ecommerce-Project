const jwt=require('jsonwebtoken')

const generateToken=(id,key,timestamp)=>{
    jwt.sign(id,key,{expiresIn:{timestamp}})
}

module.exports=generateToken;