import { supabase } from "../../config/db.js";

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const createContactMessage = async ({ name, email, message }) => {
  const cleanName = name?.trim();
  const cleanEmail = email?.trim().toLowerCase();
  const cleanMessage = message?.trim();

  if (!cleanName) {
    const error = new Error("Name is required");
    error.statusCode = 400;
    throw error;
  }

  if (!cleanEmail || !isValidEmail(cleanEmail)) {
    const error = new Error("Valid email is required");
    error.statusCode = 400;
    throw error;
  }

  if (!cleanMessage) {
    const error = new Error("Message is required");
    error.statusCode = 400;
    throw error;
  }

  if (cleanMessage.length > 2000) {
    const error = new Error("Message cannot exceed 2000 characters");
    error.statusCode = 400;
    throw error;
  }

  const { data, error } = await supabase
    .from("contact_messages")
    .insert({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      status: "new",
    })
    .select("id, name, email, message, status, created_at")
    .single();

  if (error) throw error;

  return data;
};
