
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
 




function App(){

 
  
  return(
    <Provider store={store}>
    <div className="w-screen h-screen">
      
    <RouterProvider router={appRouter}/>
   
    </div>
    </Provider>
  )
}


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

export default App;
