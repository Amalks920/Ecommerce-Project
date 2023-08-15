import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { deleteWishlistProduct, getWishlist } from "../features/wishlist/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
   
export function EcommerceCard({el,userId}) {
   let dispatch=useDispatch()



    return (
      <Card className="w-96 border border-black">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={el?.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {el?.productName}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
                {el?.price} RS
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {el?.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
          <button
          onClick={()=>{
            let data={
              productId:el?._id,
              userId:userId
            }
            dispatch(deleteWishlistProduct(data))
            dispatch(getWishlist(userId))
          }}
           className="text-center mt-4 ms-[25%] text-red-600">Remove from Wishlist</button>
        </CardFooter>
      </Card>
    );
  }


  export default EcommerceCard