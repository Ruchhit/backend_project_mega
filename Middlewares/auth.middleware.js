 
import jwt from "jsonwebtoken";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { User } from "../Models/user.model.js";
 

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    // console.log(token);
    // if (!token) {
    //   throw new Error("Unauthorized request");
    // }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    // if (!user) {
    //   throw new Error("Invalid Access Token");
    // }

    req.user = user;
    next(); // No argument here, meaning no error is passed
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});
