import express from "express";
const server=express();
import cors from 'cors'
import {router} from "../Routes/user.route.js"

server.use(cors({origin : process.env.CORS_ORIGIN}))

server.use("/api/v1/users",router);

export {server}


