import React, { useState } from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../utils/loginSlice'
import { RxDashboard } from 'react-icons/rx'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";


const Sidebar = () => {
  const navigate=useNavigate()
const dispatch=useDispatch()
const [isOrderNavOpen,setIsOrderNavOpen]=useState(false)
const [isCategoryNavOpen,setIsCategoryNavOpen]=useState(false)
const [isProductNavOpen,setIsProductNavOpen]=useState(false)
const [isCustomerNavOpen,setIsCustomerNavOpen]=useState(false)
const [isCouponNavOpen,setIsCouponNavOpen]=useState(false)





const logout = () =>{
  
  
  axios.get('/user/logout')
  .then((res)=>{
    console.log(res)
    dispatch(logout)
    navigate('/admin/admin-login')

  })
  .catch((err)=>{
    console.log(err)
  })
}


  return (
//     <div className='w-80 h-screen  bg-black pt-16 fixed   text-white '>
//     <ul className='p-5 font-mono items-start  flex flex-col justify-start w-full text-lg'>
//       <Link className='w-full pb-10' to="/">
//         <li className='ps-10 w-full  p-3 hover:text-violet-900 hover:border-r-8 border-r-violet-500'><span className='flex'><RxDashboard size={25}/><h1 className='text-2xl ms-6'>Dashboard</h1></span></li>
//         </Link>

//         <div className='w-full mb-12'>
//       <Link  className='w-full pb-10 ' >
//       <li onClick={
//         ()=>{

//           isOrderNavOpen?setIsNavOpen(false):setIsNavOpen(true)
//         }
        
//       }
//       className='ps-10 w-full  p-3 hover:text-violet-900 hover:border-r-8 border-r-violet-500'><span className='flex'><RxDashboard size={25}/><h1 className='text-2xl ms-6'>Orders</h1></span></li>
//         </Link>
//       { isOrderNavOpen &&
//       <>
//         <Link to={'/admin/view-orders'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>View Orders</li></Link>
//         <Link to={'/admin/update-orders'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Edit Orders</li></Link>

//         </>
//        }
//       </div>

// <div>
//       <Link
//       onClick={()=>{
//         isCategoryNavOpen?setIsCategoryNavOpen(false):setIsCategoryNavOpen(true)
//       }}
//      to={'/admin/add-category'}  ><li  className='ps-10 w-full  p-3 hover:text-violet-900 hover:border-r-8 border-r-violet-500'
//      ><h1 className='text-2xl ms-10'>Category</h1></li></Link>
//      { isCategoryNavOpen &&
//       <>
//         <Link to={'/admin/view-orders'} className=' w-full pb-10' ><li className='ps-10 w-full  p-3 hover:text-violet-900 hover:border-r-8 border-r-violet-500'>View Orders</li></Link>
//         <Link to={'/admin/update-orders'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Edit Orders</li></Link>

//         </>
//        }
//        </div>

//      <Link
//      onClick={()=>{
//       isProductNavOpen?setIsProductNavOpen(false):setIsProductNavOpen(true)
//     }}
//        className='w-full pb-10' ><li className=' p-3 ps-14 w-full hover:text-violet-900   hover:border-r-8 border-r-violet-500 '><h1 className='text-2xl ms-6 mt-10'>Products</h1></li></Link>
//      { isProductNavOpen &&
//       <>
//         <Link to={'/admin/add-product'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Add Products</li></Link>
//         <Link to={'/admin/view-products'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Update Products</li></Link>

//         </>
//        }

//      <Link 
//      onClick={()=>{
//       isCustomerNavOpen?setIsCustomerNavOpen(false):setIsCustomerNavOpen(true)
//      }}
//       className='w-full pb-10' ><li className=' p-3 ps-14  w-full hover:text-violet-900   hover:border-r-8 border-r-violet-500 '>
//       <h1 className='text-2xl ms-6'>Customers</h1>
//       </li></Link>
//       { isCustomerNavOpen &&
//       <>
//         <Link to={'/admin/user-management'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Add Products</li></Link>

//         </>
//        }


// <Link 
//      onClick={()=>{
//       isCouponNavOpen?setIsCouponNavOpen(false):setIsCouponNavOpen(true)
//      }}
//       className='w-full pb-10' ><li className=' p-3 ps-14  w-full hover:text-violet-900   hover:border-r-8 border-r-violet-500 '>
//       <h1 className='text-2xl ms-6'>Coupon</h1>
//       </li></Link>
//       { isCouponNavOpen &&
//       <>
//         <Link to={'/admin/add-coupon'} className=' w-full pb-10' ><li className='  p-3 ps-16 mt-5 w-full text-violet-900   border-r-8 border-r-violet-500 '>Add Coupon</li></Link>

//         </>
//        }
    
      
//     {/* <li className=' p-3 ps-24 w-full hover:text-black    hover:border hover:bg-slate-100'><buttton  onClick={logout}  className="">Logout</buttton></li> */}



//     </ul>

   
//   </div>
/* <div className="w-80 h-screen bg-black pt-16 fixed text-white">
  <ul className="p-5 font-mono items-start flex flex-col justify-start w-full text-lg">

    <Link to="/">
      <li className="pb-10">
        <span className="flex items-center">
          <RxDashboard size={25} />
          <h1 className="text-2xl ml-6">Dashboard</h1>
        </span>
      </li>
    </Link>

    <div className="w-full mb-12">
      <li
        onClick={() => {
          setIsOrderNavOpen(!isOrderNavOpen);
        }}
        className="pb-10"
      >
        <span className="flex items-center">
          <RxDashboard size={25} />
          <h1 className="text-2xl ml-6">Orders</h1>
        </span>
      </li>
      {isOrderNavOpen && (
        <>
          <Link to="/admin/view-orders" className="pb-10">
            <li className="p-3 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              View Orders
            </li>
          </Link>
          <Link to="/admin/update-orders" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              Edit Orders
            </li>
          </Link>
        </>
      )}
    </div>

    <div className="mb-12">
      <li
        onClick={() => {
          setIsCategoryNavOpen(!isCategoryNavOpen);
        }}
        className="pb-10"
      >
        <h1 className="text-2xl ml-10">Category</h1>
      </li>
      {isCategoryNavOpen && (
        <>
          <Link to="/admin/view-categories" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              View Categories
            </li>
          </Link>
          <Link to="/admin/add-category" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              Add Category
            </li>
          </Link>
        </>
      )}
    </div>

    <div className="mb-12">
      <li
        onClick={() => {
          setIsProductNavOpen(!isProductNavOpen);
        }}
        className="pb-10"
      >
        <h1 className="text-2xl ml-6 mt-10">Products</h1>
      </li>
      {isProductNavOpen && (
        <>
          <Link to="/admin/add-product" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              Add Products
            </li>
          </Link>
          <Link to="/admin/view-products" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              Update Products
            </li>
          </Link>
        </>
      )}
    </div>

    <div className="mb-12">
      <li
        onClick={() => {
          setIsCustomerNavOpen(!isCustomerNavOpen);
        }}
        className="pb-10"
      >
        <h1 className="text-2xl ml-6">Customers</h1>
      </li>
      {isCustomerNavOpen && (
        <>
          <Link to="/admin/user-management" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              User Management
            </li>
          </Link>
        </>
      )}
    </div>

    <div className="mb-12">
      <li
        onClick={() => {
          setIsCouponNavOpen(!isCouponNavOpen);
        }}
        className="pb-10"
      >
        <h1 className="text-2xl ml-6">Coupon</h1>
      </li>
      {isCouponNavOpen && (
        <>
          <Link to="/admin/add-coupon" className="pb-10">
            <li className="p-3 pl-16 mt-5 text-violet-900 border-r-8 border-r-violet-500">
              Add Coupon
            </li>
          </Link>
        </>
      )}
    </div>
  </ul>
</div> */

<Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl bg-black shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>

        <ListItem onClick={()=>{
          setIsCouponNavOpen(!isCouponNavOpen)
        }}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Coupon
        </ListItem>

      { isCouponNavOpen? <>
       <Link to={'/admin/add-coupon'}> <ListItem className='text-white' >
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Add Coupon
        </ListItem>
        </Link>  
     <Link to={'/admin/view-coupon'}> <ListItem  className='text-white'>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          View Coupon
        </ListItem>
        </Link> 
        </>:null
      }

        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>



  )
}

export default Sidebar