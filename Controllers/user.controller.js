import { asyncHandler } from "../Utils/asyncHandler.js";

const userController = asyncHandler((req,res)=>{
    res.status(200).json({message:"Hello World"})
});

const registerUser = asyncHandler((req,res)=>{
    const [userName,email,password,fullName,avatar,coverImage] = req.body;
})

export {userController}