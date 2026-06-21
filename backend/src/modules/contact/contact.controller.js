import asyncHandler from "../../utils/asyncHandler.js";
import sendResponse from "../../utils/sendResponse.js";
import { createContactMessage } from "./contact.service.js";

export const createContactMessageController = asyncHandler(async (req, res) => {
  const data = await createContactMessage({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  return sendResponse(res, 201, "Message sent successfully", data);
});
