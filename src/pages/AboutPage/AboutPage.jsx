import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const HIGHLIGHTS = [
  {
    icon: "🍫",
    title: "Kunafa & Chocolate Cups",
    desc: "Our signature — fresh fruit layered with pistachio paste, chocolate and crispy kunafa.",
  },
  {
    icon: "☕",
    title: "Specialty Coffee",
    desc: "Slow Bar V60 & Aeropress pour-overs alongside classic hot and iced lattes.",
  },
  {
    icon: "🍵",
    title: "Matcha & Mojitos",
    desc: "Vibrant matcha lattes and refreshing fruit mojitos for something lighter.",
  },
];

const REVIEWS = [
  {
    name: "Maha",
    text: "Praised the chocolate as delicious, with generous portions and a great overall staff experience.",
  },
  {
    name: "Hassan",
    text: "Called the mango chocolate cup addictive enough to order twice in two days.",
  },
  {
    name: "Miryll",
    text: "Enjoyed the large, yummy chocolate cup, though wished for a bit more chocolate to fruit ratio.",
  },
];

const HOURS = [
  { day: "Monday – Thursday", time: "12:00 PM – 12:00 AM" },
  { day: "Friday", time: "4:00 PM – 12:00 AM" },
  { day: "Saturday – Sunday", time: "12:00 PM – 12:00 AM" },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-header-inner">
          <Link to="/" className="about-logo">
            Fary Au Chocolat
          </Link>
          <Link to="/" className="about-back">
            ← Back to Menu
          </Link>
        </div>
      </header>

      <main className="about-container">
        <section className="about-hero">
          <h1>Fary Au Chocolat</h1>
          <p className="about-tagline">
            Gourmet kunafa, chocolate cups & specialty coffee in F-10 Markaz,
            Islamabad
          </p>
          <div className="about-rating-row">
            <span className="about-rating-badge">⭐ 4.6 / 5</span>
            <span className="about-rating-sub">based on 18 reviews</span>
          </div>
        </section>

        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Tucked into Crescent Plaza in F-10 Markaz, right next to Syrian
            Shawarma, Fary Au Chocolat started as a small dessert counter built
            around one idea — fresh fruit, real chocolate and warm kunafa, made
            to order. What began with a handful of kunafa and chocolate cups has
            grown into a full menu of specialty coffee, iced teas, mojitos and
            matcha, while the fruit-and-chocolate cups remain the reason
            regulars keep coming back — and keep bringing their friends.
          </p>
        </section>

        <section className="about-highlights">
          <h2>What We're Known For</h2>
          <div className="about-highlight-grid">
            {HIGHLIGHTS.map((h) => (
              <div className="about-highlight-card" key={h.title}>
                <div className="about-highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-info-grid">
          <div className="about-info-card">
            <h2>Visit Us</h2>
            <p className="about-address">
              Shop 6, Plot 1-Y, Crescent Plaza, F-10 Markaz,
              <br />
              Islamabad, 44000, Pakistan
            </p>
            <div className="about-hours">
              {HOURS.map((h) => (
                <div className="about-hours-row" key={h.day}>
                  <span>{h.day}</span>
                  <strong>{h.time}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="about-info-card">
            <h2>Find Us Online</h2>
            <div className="about-links">
              <a
                href="https://www.instagram.com/faryauchocolat/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="about-external-link"
              >
                📷 Instagram — @faryauchocolat
              </a>
              <a
                href="https://www.foodpanda.pk/restaurant/w45o/fary-au-chocolat-w45o"
                target="_blank"
                rel="noreferrer"
                className="about-external-link"
              >
                🐼 Order on Foodpanda
              </a>
              <a
                href="https://wa.me/923135505548"
                target="_blank"
                rel="noreferrer"
                className="about-external-link"
              >
                💬 WhatsApp — 0313-5505548
              </a>
            </div>
          </div>
        </section>

        <section className="about-reviews">
          <h2>What Customers Say</h2>
          <div className="about-review-grid">
            {REVIEWS.map((r) => (
              <div className="about-review-card" key={r.name}>
                <p>"{r.text}"</p>
                <span>— {r.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="about-cta">
          <Link to="/" className="about-cta-btn">
            Browse Our Menu
          </Link>
        </div>
      </main>
    </div>
  );
}
