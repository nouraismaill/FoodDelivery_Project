import express from "express";
import {
  addCart,
  getCart,
  removeFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRoute = express.Router();
cartRoute.post("/add", authMiddleware, addCart);
cartRoute.post("/remove", authMiddleware, removeFromCart);
cartRoute.post("/get", authMiddleware, getCart);
export default cartRoute;
