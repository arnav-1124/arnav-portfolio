import { env } from "../config/env.js";

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  if (env.nodeEnv === "development") {
    console.error("API Error:", {
      method: req.method,
      url: req.originalUrl,
      message: err.message,
      details: err.details,
      hint: err.hint,
      code: err.code,
      stack: err.stack,
    });
  }

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
    errors: err.errors || [],
    details: env.nodeEnv === "development" ? err.details : undefined,
    hint: env.nodeEnv === "development" ? err.hint : undefined,
    code: env.nodeEnv === "development" ? err.code : undefined,
    stack: env.nodeEnv === "development" ? err.stack : undefined,
  });
};
