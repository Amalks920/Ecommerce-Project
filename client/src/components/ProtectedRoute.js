import React from "react";
import { Route,redirect } from "react-router-dom";


const ProtectedRoute=({auth,component:Component, ...rest})=>{

    return (
        <Route {...rest} render={(props)=>{
            if(auth) return <Component {...props} />
            if(!auth) return  <redirect to={{path:'/login' ||'/enter-otp',state:{from:props.location}}} />
        }}/>
    )

}

export default ProtectedRoute