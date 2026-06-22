import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav container">
        <NavLink to="/" className="site-logo" onClick={closeMenu}>
          Arnav<span>.</span>
        </NavLink>

        <div className="site-nav__links">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/admin/login" className="nav-admin-link">
            Admin
          </NavLink>
        </div>

        <button
          className={`site-nav__toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__inner container">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "mobile-menu__link is-active" : "mobile-menu__link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/admin/login"
            onClick={closeMenu}
            className="mobile-menu__link"
          >
            Admin
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
