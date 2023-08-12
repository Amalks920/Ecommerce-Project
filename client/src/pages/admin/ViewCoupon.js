import React, { useEffect } from 'react'
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { getAllCoupon,deleteACoupon } from '../../features/coupon/couponSlice';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import EditCouponModal from '../../components/EditCouponModal';



const TABLE_HEAD = ["Coupon Code ", "Discount", "Expiry Date", "No of Coupons", "Amount"];

const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
     
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];
   

const ViewCoupon = () => {
  const coupon=useSelector(store=>store.coupon)
  
  const dispatch=useDispatch()


  useEffect(()=>{
    console.log(dispatch(getAllCoupon()))
  },[])

  const deleteCoupon = (id) => {
    console.log(dispatch(deleteACoupon(id)));

   
    setTimeout(() => {
      dispatch(getAllCoupon());
      toast.success('coupon deleted')
    }, 100);
  };


  return (
    <>
    <h1 className='absolute left-[53%] top-[25%] font-bold text-3xl'>Coupon List</h1>
    <Card className="mt-[15%] ms-[25%] w-1/2">
    <table className="w-full min-w-max table-auto text-left">
      
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th key={head} className="border-b  border-blue-gray-100 bg-black  p-4">
              <Typography
                variant="small"
                color="white"
                className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {coupon?.coupons?.map(({ name, expiry, discount, _id }, index) => {
          const isLast = index === coupon.coupons.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={name}>
             

                
               <td className={classes }>
            
               
                 <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              
              </td>
              
              <td className={`${classes} bg-blue-gray-50/50`}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {discount}
                </Typography>
              </td>
              <td className={classes}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {expiry}
                </Typography>
              </td>
              
            
             <td className={`${classes} bg-blue-gray-50/50`}>

                <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                <EditCouponModal/>
                </Typography>
              </td> 

              <td onClick={()=>{
                deleteCoupon(_id)
              }} className={`${classes} bg-blue-gray-50/50 p-5`}>
                <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                 <Button color='red' fullWidth>Delete</Button>
                 <ToastContainer/>
                </Typography>
              </td>
            
        
            </tr>
          );
        })}
      </tbody>
    </table>
  </Card>
  </>
  )
}

export default ViewCoupon