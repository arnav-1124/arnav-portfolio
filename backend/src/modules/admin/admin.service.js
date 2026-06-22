import { supabase } from "../../config/db.js";

export const getContactMessages = async () => {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("id, name, email, message, status, created_at")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
};

export const updateContactMessageStatus = async ({ id, status }) => {
  const allowedStatuses = ["new", "read", "archived"];

  if (!allowedStatuses.includes(status)) {
    const error = new Error("Invalid message status");
    error.statusCode = 400;
    throw error;
  }

  const { data, error } = await supabase
    .from("contact_messages")
    .update({ status })
    .eq("id", id)
    .select("id, name, email, message, status, created_at")
    .single();

  if (error) throw error;

  return data;
};
