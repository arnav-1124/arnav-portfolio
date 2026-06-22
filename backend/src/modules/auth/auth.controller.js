import asyncHandler from "../../utils/asyncHandler.js";
import sendResponse from "../../utils/sendResponse.js";
import { loginAdmin } from "./auth.service.js";

export const adminLoginController = asyncHandler(async (req, res) => {
  const data = loginAdmin({
    email: req.body.email,
    password: req.body.password,
  });

  return sendResponse(res, 200, "Admin logged in successfully", data);
});
