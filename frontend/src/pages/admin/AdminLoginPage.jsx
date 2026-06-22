import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin, setAdminToken } from "../../lib/api.js";

function AdminLoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const data = await loginAdmin(formData);
      setAdminToken(data.token);
      navigate("/admin");
    } catch (error) {
      setStatus(error.message || "Could not login");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <span>Admin</span>
        <h1>Login to portfolio admin</h1>
        <p>Manage contact messages, blog posts, projects, and proof content.</p>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        {status ? <p className="admin-form-error">{status}</p> : null}
      </form>
    </main>
  );
}

export default AdminLoginPage;
