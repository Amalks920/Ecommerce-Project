
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
 

const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<MainContainer />,
  children:[
    {
    path:'/signup',
    element:<Signup />
    },
    {
      path:'/login',
      element:<Login />,
      children:[
        
      ]
    }
  ]
}
])


function App(){

 
  
  return(
    <div className="w-screen h-screen">
    
    <RouterProvider router={appRouter}/>
   
    </div>
  )
}


export default App;
