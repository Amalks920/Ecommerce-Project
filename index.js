const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const dbConnect=require('./config/dbConnect')
const PORT=process.env.PORT || 4000
const authRouter=require('./routes/authRoute')


dbConnect()

// app.use('/',(req,res,next)=>{
//     res.send(`<h1>Hello from Server</h1>`)
// })

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/user',authRouter)

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})