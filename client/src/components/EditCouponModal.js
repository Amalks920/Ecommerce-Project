import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { updateACoupon } from "../features/coupon/couponSlice";
import { useDispatch, useSelector } from "react-redux";
 
export function EditCouponModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const dispatch=useDispatch()



  const editCoupon=()=>{
        dispatch(updateACoupon)
  }
    
  return (
    <>
      <Button onClick={handleOpen} fullWidth>Edit</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
             Edit Coupon 
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Coupon Name" size="lg" />
            <Input type="date" label="expiry date" size="lg" />
            <Input type="number" label="discount" size="lg" />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button 
            onClick={()=>{
                editCoupon()
            }}
            variant="gradient" fullWidth>
              Edit Coupon
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
           
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
             
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}


export default EditCouponModal