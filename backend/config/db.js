import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const connectDB = async () => {
  await mongoose
    .connect(process.env.mangoDB_URL)
    .then(() => console.log("DB connected"));
};
