import {
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { clearAdminToken } from "../../lib/api.js";

const adminLinks = [
  { label: "Control Center", href: "/admin", icon: LayoutDashboard, end: true },
  {
    label: "Contact Messages",
    href: "/admin/contact-messages",
    icon: Inbox,
  },
  { label: "Blog Posts", href: "/admin/blog", icon: BookOpenText },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Journey", href: "/admin/journey", icon: BriefcaseBusiness },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
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
          <div className="admin-sidebar__logo">AR</div>

          <div>
            <strong>Arnav.</strong>
            <span>Portfolio Admin</span>
          </div>
        </div>

        <nav className="admin-sidebar__nav">
          {adminLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? "admin-nav-link is-active" : "admin-nav-link"
                }
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="admin-sidebar__profile">
          <div className="admin-sidebar__profile-avatar">AR</div>
          <div>
            <strong>Arnav Raj</strong>
            <span>Admin</span>
          </div>
        </div>

        <button
          type="button"
          className="admin-sidebar__logout"
          onClick={handleLogout}
        >
          <LogOut size={17} />
          <span>Logout</span>
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <span>Control Center</span>
            <strong>Welcome, Arnav Raj</strong>
          </div>

          <a href="/" target="_blank" rel="noreferrer">
            View site
          </a>
        </header>

        <div className="admin-main__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
