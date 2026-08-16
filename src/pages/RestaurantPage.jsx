import React, { useState, useEffect } from "react";
import "./RestaurantPage.css";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import LocationModal from "../components/LocationModal/LocationModal";

const PRODUCTS = [
  {
    id: 1,
    name: "Chocolate Truffle Box",
    price: 1200,
    desc: "Assorted gourmet truffles",
    category: "Chocolates",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 2,
    name: "Dark Chocolate Bar",
    price: 350,
    desc: "70% cacao single origin",
    category: "Chocolates",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 3,
    name: "Hot Chocolate Pack",
    price: 450,
    desc: "Rich drinking chocolate mix",
    category: "Drinks",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 4,
    name: "Milk Chocolate Gift Bar",
    price: 280,
    desc: "Smooth milk chocolate with caramel notes",
    category: "Chocolates",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 5,
    name: "Chocolate Cake Slice",
    price: 650,
    desc: "Decadent layered chocolate cake (single slice)",
    category: "Desserts",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 6,
    name: "Macarons Box (6)",
    price: 900,
    desc: "Colorful assorted macarons",
    category: "Desserts",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 7,
    name: "Chocolate-Dipped Strawberries",
    price: 550,
    desc: "Fresh strawberries dipped in dark chocolate",
    category: "Desserts",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 8,
    name: "Hazelnut Praline Spread (Jar)",
    price: 750,
    desc: "Creamy hazelnut spread for toast and desserts",
    category: "Chocolates",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 9,
    name: "Artisan Brownie",
    price: 320,
    desc: "Fudgy brownie with chocolate chips",
    category: "Bakery",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 10,
    name: "Iced Chocolate",
    price: 380,
    desc: "Chilled chocolate drink topped with whipped cream",
    category: "Drinks",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 11,
    name: "Gift Hamper (Small)",
    price: 2200,
    desc: "Selection of chocolates and sweets, gift-wrapped",
    category: "Gifts",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
  {
    id: 12,
    name: "Espresso Shot",
    price: 200,
    desc: "Single shot of rich espresso",
    category: "Drinks",
    image: "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg",
  },
];

export default function RestaurantPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);
  const [deliveryMode, setDeliveryMode] = useState("Delivery");
  const [cart, setCart] = useState([]);
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [tip, setTip] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState({ name: "", phone: "", address: "" });
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  function addToCart(p) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found)
        return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
  }

  function updateQty(id, delta) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i,
        )
        .filter((i) => i.qty > 0),
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  function submitOrder(e) {
    e.preventDefault();
    alert(
      `Order placed!\nName: ${order.name}\nPhone: ${order.phone}\nAddress: ${order.address}\nTotal: PKR ${total}`,
    );
    setCart([]);
    setShowForm(false);
    setOrder({ name: "", phone: "", address: "" });
  }

  // load cart from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {}
  }, []);

  // persist cart
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const cartCount = cart.reduce((s, i) => s + (i.qty || 0), 0);

  function scrollToCart() {
    const el = document.querySelector(".cart-panel");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearCart() {
    setCart([]);
    try {
      localStorage.removeItem("cart");
    } catch (e) {}
  }

  function openQuickAdd(p) {
    setSelectedProduct(p);
    setSelectedQty(1);
  }

  function addToCartWithQty(p, qty) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found)
        return prev.map((i) =>
          i.id === p.id ? { ...i, qty: i.qty + qty } : i,
        );
      return [...prev, { ...p, qty }];
    });
    setSelectedProduct(null);
  }

  function handleLocationSelect(selection) {
    setDeliveryMode(selection.orderType);
    setSelectedLocation(selection.location);
    setShowLocationModal(false);
  }

  return (
    <div>
      {showLocationModal && <LocationModal onSelect={handleLocationSelect} />}
      <Navbar cartCount={cartCount} onCartClick={scrollToCart} />

      <div className="container">
        <div className="hero">
          <div className="hero-left">
            <h1>Fary Au Chocolat</h1>
            <p className="lead">
              Handcrafted chocolates & desserts. Fresh daily — order for
              delivery or pickup.
            </p>

            <div className="hero-meta">
              <div className="rating">
                ⭐ <strong>4.8</strong>{" "}
                <span className="muted">• 41 reviews</span>
              </div>

              <div className="chips">
                <span className="chip open">Open</span>
                <span className="chip">Min PKR 500</span>
                <span className="chip">Delivery 30–45 min</span>
              </div>

              <div className="delivery-toggle">
                <button
                  className={deliveryMode === "Delivery" ? "active" : ""}
                  onClick={() => setDeliveryMode("Delivery")}
                >
                  Delivery
                </button>
                <button
                  className={deliveryMode === "Pickup" ? "active" : ""}
                  onClick={() => setDeliveryMode("Pickup")}
                >
                  Pick-up
                </button>
              </div>
            </div>

            <div className="hero-ctas">
              <button
                className="primary"
                onClick={() => {
                  document
                    .querySelector(".products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Order from Menu
              </button>
              <button
                className="ghost"
                onClick={() => alert("View offers (demo)")}
              >
                See Offers
              </button>
            </div>

            <div className="hero-search">
              <input
                placeholder="Search menu or items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="hero-right">
            <img
              src="/hero.jpg"
              alt="Hero"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "/jacob-boavista-B6kBrzkl3YQ-unsplash.jpg";
              }}
            />
          </div>
        </div>
        <main className="restaurant-root">
          <aside className="menu">
            <div className="restaurant-header">
              <h1>Fary Au Chocolat</h1>
              <p>Gourmet chocolates & desserts — static demo</p>
            </div>

            <div>
              <CategoryNav
                categories={[
                  "All",
                  ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
                ]}
                selected={category}
                onSelect={setCategory}
              />

              <div style={{ marginBottom: 12 }}>
                <input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    padding: 8,
                    width: "100%",
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
              </div>

              <div className="products">
                {PRODUCTS.filter(
                  (p) =>
                    (category === "All" || p.category === category) &&
                    (p.name.toLowerCase().includes(search.toLowerCase()) ||
                      p.desc.toLowerCase().includes(search.toLowerCase())),
                ).map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onAdd={() => addToCart(p)}
                    onQuickOpen={openQuickAdd}
                  />
                ))}
              </div>
            </div>
          </aside>

          <section className="cart-panel">
            <h2>Cart</h2>
            <div className="cart-box">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <p className="empty">Your cart is empty</p>
                  <small className="muted">
                    Add items from the menu to start your order.
                  </small>
                </div>
              ) : (
                <div className="cart-list premium-cart">
                  {cart.map((i) => (
                    <div key={i.id} className="cart-item">
                      <div className="cart-thumb">
                        <img src={i.image} alt={i.name} />
                      </div>
                      <div className="cart-item-main">
                        <div className="cart-line">
                          <strong className="item-name">{i.name}</strong>
                          <div className="item-price">
                            PKR {i.price * i.qty}
                          </div>
                        </div>
                        <div className="cart-controls">
                          <button
                            onClick={() => updateQty(i.id, -1)}
                            aria-label="Decrease"
                          >
                            -
                          </button>
                          <span className="qty">{i.qty}</span>
                          <button
                            onClick={() => updateQty(i.id, 1)}
                            aria-label="Increase"
                          >
                            +
                          </button>
                          <button
                            className="remove"
                            onClick={() => removeItem(i.id)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="muted small">{i.desc}</div>
                      </div>
                    </div>
                  ))}

                  <div className="cart-promo">
                    <input
                      placeholder="Promo code"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        if (!promo) return alert("Enter promo code (demo)");
                        const code = promo.trim().toUpperCase();
                        if (code === "FARY10") {
                          setAppliedPromo({
                            code,
                            amount: Math.round(total * 0.1),
                          });
                          alert("Promo applied: 10% off");
                        } else {
                          alert("Invalid promo (demo)");
                        }
                      }}
                    >
                      Apply
                    </button>
                  </div>

                  <div className="cart-estimate">
                    <div className="estimate-row">
                      <div>Subtotal</div>
                      <div>PKR {total}</div>
                    </div>
                    <div className="estimate-row">
                      <div>Delivery</div>
                      <div>PKR {total > 1500 ? 0 : 120}</div>
                    </div>
                    <div className="estimate-row">
                      <div>Tax</div>
                      <div>PKR {Math.round(total * 0.13)}</div>
                    </div>
                    <div className="estimate-row tip-row">
                      <div>Tip</div>
                      <div className="tip-buttons">
                        <button
                          onClick={() => setTip(0)}
                          className={tip === 0 ? "active" : ""}
                        >
                          No tip
                        </button>
                        <button
                          onClick={() => setTip(50)}
                          className={tip === 50 ? "active" : ""}
                        >
                          PKR 50
                        </button>
                        <button
                          onClick={() => setTip(100)}
                          className={tip === 100 ? "active" : ""}
                        >
                          PKR 100
                        </button>
                      </div>
                    </div>

                    {appliedPromo && (
                      <div className="estimate-row">
                        <div>Promo ({appliedPromo.code})</div>
                        <div>-PKR {appliedPromo.amount}</div>
                      </div>
                    )}

                    <div className="cart-summary total-row">
                      <div>Total</div>
                      <div className="total-amount">
                        PKR{" "}
                        {total +
                          (total > 1500 ? 0 : 120) +
                          Math.round(total * 0.13) +
                          tip -
                          (appliedPromo ? appliedPromo.amount : 0)}
                      </div>
                    </div>
                  </div>

                  <div className="cart-actions premium-actions">
                    <button
                      className="checkout"
                      onClick={() => alert("Proceed to checkout (static)")}
                    >
                      Checkout
                    </button>

                    <button className="checkout" onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}

              {showForm && (
                <form className="order-form" onSubmit={submitOrder}>
                  <h3>Delivery Details</h3>
                  <label>
                    Name
                    <input
                      value={order.name}
                      onChange={(e) =>
                        setOrder({ ...order, name: e.target.value })
                      }
                      required
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      value={order.phone}
                      onChange={(e) =>
                        setOrder({ ...order, phone: e.target.value })
                      }
                      required
                    />
                  </label>
                  <label>
                    Address
                    <textarea
                      value={order.address}
                      onChange={(e) =>
                        setOrder({ ...order, address: e.target.value })
                      }
                      required
                    />
                  </label>
                  <div className="form-actions">
                    <button type="submit" className="place">
                      Place Order
                    </button>
                    <button type="button" onClick={() => setShowForm(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </main>
      </div>

      <Footer />
      {selectedProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-right">
              <h3>{selectedProduct.name}</h3>
              <p className="desc">{selectedProduct.desc}</p>
              <div className="modal-price">PKR {selectedProduct.price}</div>
              <div className="qty-control">
                <button
                  onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                >
                  -
                </button>
                <span>{selectedQty}</span>
                <button onClick={() => setSelectedQty(selectedQty + 1)}>
                  +
                </button>
              </div>
              <div style={{ marginTop: 12 }}>
                <button
                  className="primary"
                  onClick={() => addToCartWithQty(selectedProduct, selectedQty)}
                >
                  Add {selectedQty} to cart
                </button>
                <button
                  style={{ marginLeft: 8 }}
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
