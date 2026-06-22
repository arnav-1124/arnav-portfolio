import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { clearAdminToken } from "../../lib/api.js";

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Contact messages", href: "/admin/contact-messages" },
  { label: "Blog", href: "/admin/blog" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Journey", href: "/admin/journey" },
];

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminToken();
    navigate("/admin/login");
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <strong>Arnav.</strong>
          <span>Admin Panel</span>
        </div>

        <nav>
          {adminLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/admin"}
              className={({ isActive }) =>
                isActive ? "admin-nav-link is-active" : "admin-nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
