const User=require('../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');

const saltRounds = 10;


const createUser=asyncHandler(async(req,res)=>{
    

    const email=req.body.email;
    console.log(req.body.email)
    const findUser=await User.findOne({email:email})
   
    if(!findUser){

        try {

            //hashing password
              bcrypt.genSalt(saltRounds,  function(err, salt) {
                 bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if  (err) console.log(err)
                    else req.body.password=hash
                    console.log(req.body.password)
                });
            });

        let user=await User.create(req.body)
            res.json({user:user})
        } catch (error) {
            res.json({error:error.message})
        }
    
         
    }else{
        console.log('hello')
        res.json({
            message:"user already exists",
            success:false,
        })
    }
}
)

module.exports={createUser}