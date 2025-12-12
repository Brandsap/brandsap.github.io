// src/components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/process", label: "Process" },
  { path: "/pricing", label: "Pricing" },
  { path: "/customers", label: "Customers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">

        {/* BRAND LOGO */}
        <button className="nav-brand-pill" onClick={() => navigate("/")}>
          <div className="nav-brand-icon">
            <img
              src="/images/B Logo.png"
              alt="Brandsap Logo"
              className="nav-brand-icon-img"
            />
          </div>
          <span className="nav-brand-name">BRANDSAP</span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="nav-desktop">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions">
          <button
            className="primary-btn nav-primary"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </button>

          <button
            className="nav-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="nav-mobile sheet">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                "nav-link-mobile" + (isActive ? " nav-link--active" : "")
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            className="primary-btn nav-primary mobile-cta"
            onClick={() => {
              setOpen(false);
              navigate("/contact");
            }}
          >
            Contact us
          </button>
        </div>
      )}
    </header>
  );
}
