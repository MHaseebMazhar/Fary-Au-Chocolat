import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({
  brand = "Fary Au Chocolat",
  cartCount = 0,
  onCartClick,
  logoSrc = "/logo.jpg",
}) {
  const [lang, setLang] = useState("EN");
  const [imgError, setImgError] = useState(false);

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
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
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
