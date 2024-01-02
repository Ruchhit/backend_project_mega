import dotenv from 'dotenv'
import { dbConnect } from '../Database/db.config.js'
 import {server} from './app.js'

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
 