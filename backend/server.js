import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("The API works");
});
app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
