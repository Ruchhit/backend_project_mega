 import {Router} from "express";
const router = Router();
import { registerUser } from "../Controllers/user.controller.js";
import { loginUser } from "../Controllers/user.controller.js";
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
    
]),registerUser);

router.route("/login").post(loginUser)

export {router}