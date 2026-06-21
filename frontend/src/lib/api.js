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

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || "Something went wrong");
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
