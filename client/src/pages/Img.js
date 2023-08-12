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
import OrderSummaryCard from "../components/OrderSummaryCard";
 
 function Img() {
  return (
    <div className="flex justify-center items-center mt-[15%]">
      <OrderSummaryCard/>
    </div>
  );
}

export default Img