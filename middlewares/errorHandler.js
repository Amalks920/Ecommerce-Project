//not found

const notFound=(req,res,next)=>{
    const error=new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    console.log(error?.message) 
    next(error)
    
}

//error handler
const errorHandler=(err,req,res,next)=>{
    console.log(err.message)
    const statuscode=res.statuscode===200 ? 500 :res.statuscode;
    res.status(statuscode);
    res.json({
        message:err?.message,
        stack:err?.stack,
    })
}

module.exports={errorHandler,notFound}