import { asyncHandler } from "../Utils/asyncHandler.js";

const userController = asyncHandler((req,res)=>{
    res.status(200).json({message:"Hello World"})
});

const registerUser = asyncHandler((req,res)=>{
    const {userName,email,password,fullName,avatar,coverImage} = req.body;

    if([userName,email,password,fullName,avatar,coverImage].some((field)=> field?.trim() === ""))
{
    return res.status(400).json({message:"Please fill all the fields"})
}
})

 

export {userController,registerUser}