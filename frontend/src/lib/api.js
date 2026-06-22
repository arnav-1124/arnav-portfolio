const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const VISITOR_ID_KEY = "arnav_portfolio_visitor_id";

export const getVisitorId = () => {
  const existingVisitorId = localStorage.getItem(VISITOR_ID_KEY);

  if (existingVisitorId) return existingVisitorId;

  const visitorId =
    crypto?.randomUUID?.() ||
    `visitor_${Date.now()}_${Math.random().toString(16).slice(2)}`;

  localStorage.setItem(VISITOR_ID_KEY, visitorId);

  return visitorId;
};

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-visitor-id": getVisitorId(),
      ...(options.headers || {}),
    },
  });

  let payload = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    console.error("API request failed:", {
      path,
      status: response.status,
      payload,
    });

    throw new Error(payload?.message || "Something went wrong");
  }

  return payload.data;
};

export const getBlogSocial = (slug) => {
  return request(`/blog/${slug}/social`);
};

export const likeBlogPost = (slug) => {
  return request(`/blog/${slug}/like`, {
    method: "POST",
  });
};

export const unlikeBlogPost = (slug) => {
  return request(`/blog/${slug}/like`, {
    method: "DELETE",
  });
};

export const addBlogComment = ({ slug, displayName, commentText }) => {
  return request(`/blog/${slug}/comments`, {
    method: "POST",
    body: JSON.stringify({
      displayName,
      commentText,
    }),
  });
};

export const sendContactMessage = ({ name, email, message }) => {
  return request("/contact", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
};

const ADMIN_TOKEN_KEY = "arnav_portfolio_admin_token";

export const getAdminToken = () => {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
};

export const setAdminToken = (token) => {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
};

export const clearAdminToken = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

const adminRequest = async (path, options = {}) => {
  const token = getAdminToken();

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  let payload = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(payload?.message || "Admin request failed");
  }

  return payload.data;
};

export const loginAdmin = ({ email, password }) => {
  return request("/auth/admin-login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const getAdminContactMessages = () => {
  return adminRequest("/admin/contact-messages");
};

export const updateAdminContactMessageStatus = ({ id, status }) => {
  return adminRequest(`/admin/contact-messages/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
};
