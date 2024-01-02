import { User } from "../Models/user.model.js";
import { asyncHandler } from "../Utils/asyncHandler.js";

const userController = asyncHandler((req,res)=>{
    res.status(200).json({message:"Hello World"})
});

const registerUser = asyncHandler(async (req,res)=>{
    const {userName,email,password,fullName,avatar,coverImage} = req.body;

    if([userName,email,password,fullName,avatar,coverImage].some((field)=> field?.trim() === ""))
{
    return res.status(400).json({message:"Please fill all the fields"})
}

 const existedUser = await User.findOne({$or : [{userName} , {email}]})
 if(existedUser){
     return res.status(400).json({message:"User already exists"})
 }





})

 

export {userController,registerUser}