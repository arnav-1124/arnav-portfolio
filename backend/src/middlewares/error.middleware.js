import { env } from "../config/env.js";

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
    errors: err.errors || [],
    stack: env.nodeEnv === "development" ? err.stack : undefined,
  });
};
