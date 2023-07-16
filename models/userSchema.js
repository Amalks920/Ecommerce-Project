const mongoose = require('mongoose'); // Erase if already required
const ObjectId=require('mongodb').ObjectId
const bcrypt=require('bcrypt')

const saltRounds = 10;

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
   
 
    name:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 50,
        pattern: /^[a-zA-Z ]+$/,
        message: 'Name must be at least 3 characters long and contain only letters and spaces',
    },
    // username:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     minLength: 3,
    //     maxLength: 50,
    //     pattern: /^[a-z0-9]+$/,
    //     message: 'Username must be at least 3 characters long and contain only lowercase letters and numbers',
    // },

    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
        message: 'Invalid email address',
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        match: /^\d{10}$/,
        message: 'Invalid mobile number',
    },
    password:{
        type:String,
        required:true,
        minLength: 8,
        maxLength: 128,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]{8,128}$/,
        message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"user"
    },
    cart:{
        type:Array,
        default:[]
    },
    address:[{
        type:mongoose.ObjectId,
        ref:"Address"
}],
  wishlists:[{
    type:mongoose.ObjectId,
    ref:"Product"
}],

refreshToken:{
    type:String
}

},
{
    timestamps:true
}
);

userSchema.pre('save',async function (next){
    this.password=await bcrypt.hash(this.password, saltRounds)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
}

//Export the model
module.exports = mongoose.model('User', userSchema);