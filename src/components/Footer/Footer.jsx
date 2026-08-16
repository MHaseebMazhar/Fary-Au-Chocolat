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
            <a
              href="https://www.instagram.com/faryauchocolat/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://wa.me/923135505548"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2 22l5.117-1.335a9.96 9.96 0 0 0 4.887 1.283h.004c5.514 0 9.997-4.483 9.997-9.997s-4.483-9.948-10.001-9.948zm0 18.081h-.003a8.06 8.06 0 0 1-4.108-1.126l-.295-.175-3.035.792.81-2.958-.192-.304a8.075 8.075 0 0 1-1.24-4.313c0-4.466 3.633-8.099 8.101-8.099 2.164 0 4.198.843 5.727 2.373a8.043 8.043 0 0 1 2.372 5.729c-.001 4.467-3.634 8.081-8.137 8.081z" />
              </svg>
            </a>
          </div>
          <div style={{ marginTop: 8 }} className="contact-number">
            <a href="tel:+923135505548">0313-5505548</a>
          </div>
        </div>

        <div className="footer-col">
          <div className="col-title">Explore</div>
          <a href="#top">Menu</a>
          <a href="#top">About</a>
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
