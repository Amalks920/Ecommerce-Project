import { useLocation,Navigate,Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
// import { useSelector } from "react-redux";

export const RequireAuth=(isHome)=> {
    const {auth}=useAuth()

    const navigate=useNavigate()
    const location=useLocation()
        console.log('auth');
        console.log(auth.user)
    return (
       
        auth?.user
            ?<Outlet/>
            :<Navigate to={"/login"} state={{from:location}} replace/>
    );
}

export const RequireAdminAuth=(isAdmin)=>{
    // let role=useSelector(store=>store.user.role)

    return (
    isAdmin==="admin"? <Outlet/>
    :<Navigate to={'/login'}/>
    );

}

