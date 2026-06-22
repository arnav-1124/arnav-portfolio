import { Router } from "express";

import { adminLoginController } from "./auth.controller.js";

const router = Router();

router.post("/admin-login", adminLoginController);

export default router;
