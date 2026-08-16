import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [order, setOrder] = useState({
    name: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: Math.max(0, item.qty + delta),
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
    setPromo("");

    localStorage.removeItem("cart");
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const delivery = subtotal === 0 ? 0 : subtotal > 1500 ? 0 : 120;

  const tax = Math.round(subtotal * 0.13);

  const discount = appliedPromo ? appliedPromo.amount : 0;

  const grandTotal = subtotal + delivery + tax - discount;

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const applyPromo = () => {
    const code = promo.trim().toUpperCase();

    if (!code) {
      alert("Please enter promo code");
      return;
    }

    if (code === "FARY10") {
      setAppliedPromo({
        code: "FARY10",
        amount: Math.round(subtotal * 0.1),
      });

      alert("Promo applied: 10% off");
    } else {
      setAppliedPromo(null);
      alert("Invalid promo code");
    }
  };

  const submitOrder = (e) => {
    e.preventDefault();

    alert(
      `Order placed!\n\nName: ${order.name}\nPhone: ${order.phone}\nAddress: ${order.address}\n\nTotal: PKR ${grandTotal}`,
    );

    setCart([]);
    setShowForm(false);
    setAppliedPromo(null);
    setPromo("");

    setOrder({
      name: "",
      phone: "",
      address: "",
    });

    localStorage.removeItem("cart");
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <div className="cart-header-inner">
          <Link to="/" className="cart-logo">
            Fary Au Chocolat
          </Link>

          <Link to="/" className="back-menu">
            ← Continue Shopping
          </Link>
        </div>
      </header>

      <main className="cart-container">
        <div className="cart-title-row">
          <div>
            <h1>Your Cart</h1>
            <p>
              {cartCount === 0
                ? "Your cart is currently empty."
                : `${cartCount} item${cartCount > 1 ? "s" : ""} in your cart`}
            </p>
          </div>

          {cart.length > 0 && (
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>
              Add some delicious chocolates, desserts or drinks to your cart.
            </p>

            <button className="continue-btn" onClick={() => navigate("/")}>
              Browse Menu
            </button>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-section">
              <div className="cart-card">
                <div className="cart-card-heading">
                  <h2>Cart Items</h2>
                  <span>{cartCount} items</span>
                </div>

                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>

                        <p>{item.desc}</p>

                        <div className="cart-item-price">PKR {item.price}</div>
                      </div>

                      <div className="cart-item-actions">
                        <div className="quantity-control">
                          <button onClick={() => updateQty(item.id, -1)}>
                            −
                          </button>

                          <span>{item.qty}</span>

                          <button onClick={() => updateQty(item.id, 1)}>
                            +
                          </button>
                        </div>

                        <div className="item-total">
                          PKR {item.price * item.qty}
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="order-summary">
              <div className="summary-card">
                <h2>Order Summary</h2>

                <div className="promo-box">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                  />

                  <button onClick={applyPromo}>Apply</button>
                </div>

                {appliedPromo && (
                  <div className="promo-success">
                    {appliedPromo.code} applied — 10% off
                  </div>
                )}

                <div className="summary-lines">
                  <div>
                    <span>Subtotal</span>
                    <strong>PKR {subtotal}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>
                      {delivery === 0 ? "FREE" : `PKR ${delivery}`}
                    </strong>
                  </div>

                  <div>
                    <span>Tax</span>
                    <strong>PKR {tax}</strong>
                  </div>

                  {discount > 0 && (
                    <div className="discount-row">
                      <span>Discount</span>
                      <strong>-PKR {discount}</strong>
                    </div>
                  )}
                </div>

                <div className="summary-total">
                  <span>Total</span>
                  <strong>PKR {grandTotal}</strong>
                </div>

                <button
                  className="checkout-btn"
                  onClick={() => setShowForm(true)}
                >
                  Proceed to Checkout
                </button>

                <button
                  className="continue-shopping"
                  onClick={() => navigate("/")}
                >
                  ← Continue Shopping
                </button>
              </div>

              {showForm && (
                <form className="delivery-form" onSubmit={submitOrder}>
                  <h2>Delivery Details</h2>

                  <label>
                    Full Name
                    <input
                      type="text"
                      value={order.name}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </label>

                  <label>
                    Phone Number
                    <input
                      type="tel"
                      value={order.phone}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </label>

                  <label>
                    Delivery Address
                    <textarea
                      rows="4"
                      value={order.address}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          address: e.target.value,
                        })
                      }
                      required
                    />
                  </label>

                  <div className="form-buttons">
                    <button type="submit" className="place-order-btn">
                      Place Order
                    </button>

                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
