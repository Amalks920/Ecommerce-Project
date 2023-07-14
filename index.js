const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const dbConnect=require('./config/dbConnect')
const cookieParser=require('cookie-parser')
const PORT=process.env.PORT || 4000
const authRouter=require('./routes/authRoute')
const adminRouter=require('./routes/adminRoute')
const {errorHandler,notFound}=require('./middlewares/errorHandler')
const cors=require('cors')



dbConnect()

// app.use('/',(req,res,next)=>{
//     res.send(`<h1>Hello from Server</h1>`)
// })

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/api/user',authRouter)
app.use('/api/admin',adminRouter)
app.use(cors())

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})