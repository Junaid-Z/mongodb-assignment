import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const dbConnection = mongoose.connect(process.env.MONGO_URI)
export default dbConnection;
