import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
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
    <main className="admin-auth-page">
      <section className="admin-auth-card">
        <div className="admin-auth-card__left">
          <span>Admin access</span>
          <h1>Sign in to your portfolio control center.</h1>
          <p>
            Manage contact messages, proof links, blog notes, projects,
            certificates, and portfolio content from one private workspace.
          </p>

          <div className="admin-auth-card__mini-grid">
            <div>
              <strong>01</strong>
              <p>Messages</p>
            </div>
            <div>
              <strong>02</strong>
              <p>Content</p>
            </div>
            <div>
              <strong>03</strong>
              <p>Proof</p>
            </div>
          </div>
        </div>

        <form className="admin-auth-form" onSubmit={handleSubmit}>
          <span>Welcome back</span>

          <label>
            Email address
            <div className="admin-auth-input">
              <Mail size={17} />
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <label>
            Password
            <div className="admin-auth-input">
              <LockKeyhole size={17} />
              <input
                name="password"
                type="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <button type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? "Signing in..." : "Sign in"}</span>
            <ArrowRight size={17} />
          </button>

          {status ? <p className="admin-form-error">{status}</p> : null}
        </form>
      </section>
    </main>
  );
}

export default AdminLoginPage;
