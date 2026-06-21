import { NavLink } from "react-router-dom";

const links = [
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        borderBottom: "1px solid var(--border-soft)",
        background: "rgba(16, 14, 24, 0.9)",
        backdropFilter: "blur(18px)",
      }}
    >
      <nav
        className="container"
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <NavLink
          to="/"
          style={{
            fontWeight: 700,
            letterSpacing: "-0.04em",
            fontSize: "20px",
          }}
        >
          Arnav<span style={{ color: "var(--accent)" }}>.</span>
        </NavLink>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            color: "var(--text-muted)",
            fontSize: "14px",
          }}
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              style={({ isActive }) => ({
                color: isActive ? "var(--text-main)" : "var(--text-muted)",
                transition: "color var(--transition-fast)",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
