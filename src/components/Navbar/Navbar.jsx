import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const MENU_CATEGORIES = [
  "Kunafa Cups",
  "Chocolate Cups",
  "Frappuccino",
  "Mojito",
  "Iced Tea",
  "Slow Bar",
  "Hot Latte",
  "Iced Latte",
  "Coffee",
  "Matcha",
  "Beverages",
];

export default function Navbar({
  brand = "Fary Au Chocolat",
  cartCount = 0,
  onCartClick,
  logoSrc = "/logo.jpg",
}) {
  const [lang, setLang] = useState("EN");
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function scrollToSection(id) {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }

  return (
    <header className="navbar premium">
      <div className="navbar-inner">
        <div className="navbar-left">
          <div className="logo" aria-hidden="true">
            {!imgError && logoSrc ? (
              <img
                src={logoSrc}
                alt="logo"
                className="logo-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#b33f3f" />
                <path
                  d="M7 15c1.5-2 4-3 6-3s4.5 1 6 3c-1.5 1-3.5 1.5-6 1.5S8.5 16 7 15z"
                  fill="#fff"
                  opacity="0.95"
                />
              </svg>
            )}

            <div className="brand-text">
              <div className="brand">{brand}</div>
              <div className="tag">Gourmet chocolates</div>
            </div>
          </div>
        </div>

        <div className="navbar-center">
          <nav className="nav-links">
            <div className="menu-dropdown-wrap" ref={menuRef}>
              <button
                type="button"
                className={`menu-trigger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
              >
                Menu
                <span className="menu-caret">▾</span>
              </button>

              {menuOpen && (
                <div className="menu-dropdown">
                  {MENU_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className="menu-dropdown-item"
                      onClick={() => scrollToSection(`category-${cat}`)}
                    >
                      {cat}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="menu-dropdown-item view-all"
                    onClick={() => scrollToSection("menu-start")}
                  >
                    View Full Menu →
                  </button>
                </div>
              )}
            </div>

            <Link to="/about">About</Link>
          </nav>
        </div>

        <div className="navbar-right">
          <select
            className="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Language"
          >
            <option>EN</option>
            <option>UR</option>
          </select>

          <button
            className="cart-btn"
            onClick={onCartClick}
            aria-label="Open cart"
          >
            <span className="cart-emoji">🛒</span>
            <span className="badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
