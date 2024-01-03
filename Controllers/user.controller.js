import { User } from "../Models/user.model.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { uploadOnCloudinary } from "../Utils/cloudinary.js"; 

const registerUser = asyncHandler(async (req,res)=>{
    const {userName,email,password,fullName} = req.body;

    if([userName,email,password,fullName ].some((field)=> field?.trim() === ""))
{
    return res.status(400).json({message:"Please fill all the fields"})
}

 const existedUser = await User.findOne({$or : [{userName} , {email}]})
 if(existedUser){
     return res.status(400).json({message:"User already exists"})
 }

const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath = req.files?.coverImage[0]?.path;

if(!avatarLocalPath)
{
    res.send(400).status({message : "avatar is must!!!"})
}

const avatar = await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)
console.log("avatar url",avatar.url)
const user = await User.create({
    userName,
    email,
    password,
    fullName,
    avatar : avatar?.url,
    coverImage: coverImage?.url || null,
})
//checknng wheather user created or not
const createdUser = await User.findById(user._id)

const validUser = await User.findById(user._id).select("-password -accessToken");
if(!validUser)
{
    return res.status(400).json({message:"Something went wrong"})
}

return res.status(200).json(validUser)
 





})

 

export { registerUser}