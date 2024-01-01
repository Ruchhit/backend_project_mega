import dotenv from 'dotenv'
import express from 'express'
import { dbConnect } from '../Database/db.config.js'
 const server = express();
dotenv.config();
 dbConnect()
  .then(() => {
    server.listen(3000, () => {
      console.log("server created!!");
    });
  })
  .catch((error) => {
    console.log(error + "error in index");
  });
 server.get('/',(req,res)=>{
    res.send('Hello World')
 })