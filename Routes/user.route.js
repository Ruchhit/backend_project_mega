 import {Router} from "express";
const router = Router();
import { userController } from "../Controllers/user.controller.js";

router.route("/register").post(userController);

export {router}