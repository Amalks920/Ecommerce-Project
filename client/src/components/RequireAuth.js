import { useLocation,Navigate,Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

export const RequireAuth=(isHome)=> {
    const user=useSelector(store=>store.auth)
   

    const navigate=useNavigate()
    const location=useLocation()
    console.log(user)
    return (
       
        user?.user?.accessToken && user?.user?.role==="user"
            ?<Outlet/>
            :<Navigate to={"/login"} state={{from:location}} replace/>
    );
}

export const RequireAdminAuth=({isAdmin})=>{
    // let role=useSelector(store=>store.user.role)

    return (
    isAdmin==="admin"? <Outlet/>
    :<Navigate to={'/login'}/>
    );

}

