const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {getAllOrders,
    createOrder,editOrderStatus,
    getOrder,deleteOrder}=require('../controller/Product/OrderController');


//Orders
router.post('/create-order',createOrder)
router.post('/edit-order-status',authMiddleware,editOrderStatus)
router.get('/get-order/:id',getOrder)
router.delete('/delete-order/:id',authMiddleware,deleteOrder)
router.get('/get-all-orders',getAllOrders)




module.exports=router