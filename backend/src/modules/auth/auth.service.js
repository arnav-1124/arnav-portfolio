import jwt from "jsonwebtoken";

import { env } from "../../config/env.js";

export const loginAdmin = ({ email, password }) => {
  const cleanEmail = email?.trim().toLowerCase();

  if (!cleanEmail || !password) {
    const error = new Error("Email and password are required");
    error.statusCode = 400;
    throw error;
  }

  if (
    cleanEmail !== env.adminEmail.toLowerCase() ||
    password !== env.adminPassword
  ) {
    const error = new Error("Invalid admin credentials");
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign(
    {
      role: "admin",
      email: cleanEmail,
    },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn,
    },
  );

  return {
    token,
    admin: {
      email: cleanEmail,
      role: "admin",
    },
  };
};
