import { Router } from "express";

import { requireAdminAuth } from "../auth/auth.middleware.js";
import {
  getContactMessagesController,
  updateContactMessageStatusController,
} from "./admin.controller.js";

const router = Router();

router.use(requireAdminAuth);

router.get("/contact-messages", getContactMessagesController);
router.patch(
  "/contact-messages/:id/status",
  updateContactMessageStatusController,
);

export default router;
