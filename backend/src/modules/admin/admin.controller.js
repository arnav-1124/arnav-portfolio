import asyncHandler from "../../utils/asyncHandler.js";
import sendResponse from "../../utils/sendResponse.js";
import {
  getContactMessages,
  updateContactMessageStatus,
} from "./admin.service.js";

export const getContactMessagesController = asyncHandler(async (req, res) => {
  const data = await getContactMessages();

  return sendResponse(res, 200, "Contact messages fetched", data);
});

export const updateContactMessageStatusController = asyncHandler(
  async (req, res) => {
    const data = await updateContactMessageStatus({
      id: req.params.id,
      status: req.body.status,
    });

    return sendResponse(res, 200, "Contact message status updated", data);
  },
);
