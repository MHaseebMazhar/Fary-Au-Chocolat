import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  function subscribe(e) {
    e.preventDefault();
    if (!email) return alert("Enter an email (demo)");
    alert(`Subscribed ${email} (demo)`);
    setEmail("");
  }

  return (
    <footer className="site-footer component-footer">
      <div className="footer-inner">
        <div className="footer-col brand-col">
          <div className="brand">Fary Au Chocolat</div>
          <div className="tagline">
            Handcrafted chocolates & artisanal sweets
          </div>
          <div className="socials">
            <a href="#top" aria-label="Instagram" className="icon">
              📷
            </a>
            <a href="#top" aria-label="Facebook" className="icon">
              👍
            </a>
            <a href="#top" aria-label="Twitter" className="icon">
              🐦
            </a>
          </div>
        </div>

        <div className="footer-col">
          <div className="col-title">Explore</div>
          <a href="#top">Menu</a>
          <a href="#top">Offers</a>
          <a href="#top">Gift Hampers</a>
        </div>

        <div className="footer-col">
          <div className="col-title">Support</div>
          <a href="#top">Contact</a>
          <a href="#top">FAQ</a>
          <a href="#top">Privacy</a>
        </div>

        <div className="footer-col newsletter-col">
          <div className="col-title">Stay in the loop</div>
          <div className="small muted">
            Sign up for exclusive offers and new arrivals.
          </div>
          <form className="subscribe" onSubmit={subscribe}>
            <input
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-legal">
        <div>© {new Date().getFullYear()} Fary Au Chocolat</div>
        <div className="legal-links">
          <a href="#top">Terms</a>
          <a href="#top">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
