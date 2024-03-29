 import {Router} from "express";
const router = Router();
import { logoutUser, registerUser } from "../Controllers/user.controller.js";
import { loginUser } from "../Controllers/user.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import { verifyJWT } from "../Middlewares/auth.middleware.js";

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

router.route("/logout").post(verifyJWT,logoutUser)

export {router}