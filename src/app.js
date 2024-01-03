import express from "express";
const server=express();
import cors from 'cors'
import {router} from "../Routes/user.route.js"
import cookieParser from "cookie-parser";

server.use(cors({origin : process.env.CORS_ORIGIN}))
server.use(cookieParser())
server.use(express.json())

server.use("/api/v1/users",router);

export {server}


