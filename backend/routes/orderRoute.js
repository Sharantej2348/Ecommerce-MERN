import express from "express";
import {
    placeOrderCod,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

// Admin Routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment Features
orderRouter.post("/place-cod", authUser, placeOrderCod);
orderRouter.post("/place-stripe", authUser, placeOrderStripe);
orderRouter.post("/place-razorpay", authUser, placeOrderRazorpay);

// User Features
orderRouter.post("/user-orders", authUser, userOrders);

export default orderRouter;
