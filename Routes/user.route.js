 import {Router} from "express";
const router = Router();
import { userController } from "../Controllers/user.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";

router.route("/register").post(upload.fields([
    {
    name: "avatar",
    maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }
    
]),userController);

export {router}