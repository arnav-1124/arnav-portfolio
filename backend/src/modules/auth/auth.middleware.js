import jwt from "jsonwebtoken";

import { env } from "../../config/env.js";

export const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Admin authorization token is required",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.jwtSecret);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }

    req.admin = decoded;
    return next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired admin token",
    });
  }
};
