import { asyncHandler } from "../Utils/asyncHandler.js";

const userController = asyncHandler((req,res)=>{
    res.status(200).json({message:"Hello World"})
});
export {userController}