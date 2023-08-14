import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import { useNavigate } from "react-router-dom";

 
   
  export function OrderSummaryCard() {

    const navigate=useNavigate()

    const handleCheckoutButton=()=>{
        navigate('/order')
    }

    return (
        <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl border py-20">
        <div className="p-6 flex flex-col justify-center items-center">
        
           
          <h5 className="mb-10 block font-sans  font-bold text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased">
            Order Summary
          </h5>
          <p className="block mb-5 font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <span>Total Price : </span><span>1234</span>
          </p>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <span>Total Items : </span><span>12</span>
          </p>
          <div className="p-6 mt-10 pt-0">
          <Button onClick={handleCheckoutButton}>GO TO CHECKOUT</Button>
        </div>
        </div>
        
      </div>
    );
  }

  export default OrderSummaryCard