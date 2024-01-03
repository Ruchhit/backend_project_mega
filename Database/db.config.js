import dotenv from 'dotenv'
import mongoose from "mongoose"
import { DB_NAME } from "../src/constants.js";
dotenv.config()
const dbConnect = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`Connected to MongoDB at host ${mongoose.connection.host}`);

    } catch (error) {
        console.log(error + "error in dbconfig")
    }
}
export {dbConnect}