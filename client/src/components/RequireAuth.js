import { useLocation,Navigate,Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";

const RequireAuth=(isHome)=> {
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

export default RequireAuth;