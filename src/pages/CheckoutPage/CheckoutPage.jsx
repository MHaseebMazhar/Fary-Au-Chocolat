import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressDraft, setAddressDraft] = useState("");

  const [sendAsGift, setSendAsGift] = useState(false);
  const [instructions, setInstructions] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
    setCartLoaded(true);
  }, []);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal === 0 ? 0 : subtotal > 1500 ? 0 : 130;
  const tax = Math.round(subtotal * 0.13);
  const grandTotal = subtotal + delivery + tax;

  function saveAddress() {
    if (!addressDraft.trim()) return;
    setAddress(addressDraft.trim());
    setShowAddressForm(false);
  }

  function placeOrder(e) {
    e.preventDefault();

    if (!fullName.trim()) return alert("Please enter your full name.");
    if (!/^3\d{9}$/.test(mobile)) {
      return alert("Please enter a valid 10-digit Pakistani mobile number.");
    }
    if (!address.trim()) return alert("Please add a delivery address.");

    const orderId = `ORD-${Date.now().toString().slice(-6)}`;

    navigate("/order-confirmation", {
      state: {
        orderId,
        customer: {
          name: fullName,
          phone: `${countryCode} ${mobile}`,
          address,
          email,
          instructions,
          sendAsGift,
          paymentMethod:
            paymentMethod === "cod"
              ? "Cash On Delivery"
              : "Card / JazzCash / Easypaisa",
        },
        items: cart,
        subtotal,
        delivery,
        tax,
        discount: 0,
        grandTotal,
      },
    });

    localStorage.removeItem("cart");
  }

  if (cartLoaded && cart.length === 0) {
    return (
      <div className="checkout-page">
        <header className="checkout-header">
          <div className="checkout-header-inner">
            <Link to="/" className="checkout-logo">
              Fary Au Chocolat
            </Link>
          </div>
        </header>
        <main className="checkout-empty">
          <div className="checkout-empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart before checking out.</p>
          <button className="browse-menu-btn" onClick={() => navigate("/")}>
            Browse Menu
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="checkout-header-inner">
          <Link to="/" className="checkout-logo">
            Fary Au Chocolat
          </Link>
          <div className="checkout-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/cart">Cart</Link>
            <span>›</span>
            <span className="current">Checkout</span>
          </div>
        </div>
      </header>

      <main className="checkout-container">
        <form className="checkout-layout" onSubmit={placeOrder}>
          <div className="checkout-form-col">
            <div className="checkout-card">
              <div className="checkout-fields-row">
                <label className="field">
                  Full Name
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  Mobile Number
                  <div className="mobile-input">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+92">+92</option>
            
                    </select>
                    <input
                      type="tel"
                      placeholder="3XXXXXXXXX"
                      value={mobile}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");

                        if (value.length <= 10) {
                          setMobile(value);
                        }
                      }}
                      required
                    />
                  </div>
                  <small>Example: +92 3001234567</small>
                </label>

                <label className="field">
                  Email Address
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="address-section">
                <div className="address-section-head">
                  <h3>Your Address</h3>
                  {!showAddressForm && (
                    <button
                      type="button"
                      className="add-address-btn"
                      onClick={() => {
                        setAddressDraft(address);
                        setShowAddressForm(true);
                      }}
                    >
                      + {address ? "Edit Address" : "Add new Address"}
                    </button>
                  )}
                </div>

                {!address && !showAddressForm && (
                  <div className="no-address-box">
                    You don't have a saved address.
                  </div>
                )}

                {address && !showAddressForm && (
                  <div className="saved-address-box">
                    <span>{address}</span>
                  </div>
                )}

                {showAddressForm && (
                  <div className="address-form-box">
                    <textarea
                      rows="3"
                      placeholder="House #, street, area, city..."
                      value={addressDraft}
                      onChange={(e) => setAddressDraft(e.target.value)}
                    />
                    <div className="address-form-actions">
                      <button
                        type="button"
                        className="save-address-btn"
                        onClick={saveAddress}
                      >
                        Save Address
                      </button>
                      <button
                        type="button"
                        className="cancel-address-btn"
                        onClick={() => setShowAddressForm(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="checkout-card gift-card">
              <span>Send as a gift</span>
              <button
                type="button"
                className={`toggle-switch ${sendAsGift ? "on" : ""}`}
                onClick={() => setSendAsGift((v) => !v)}
                aria-pressed={sendAsGift}
                aria-label="Send as a gift"
              >
                <span className="toggle-knob" />
              </button>
            </div>

            <div className="checkout-card">
              <h3>Special Instructions (Optional)</h3>
              <textarea
                className="instructions-input"
                rows="4"
                placeholder="Add any comment, e.g. about allergies, or delivery instructions here."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className="checkout-card">
              <h3>Select Payment Method</h3>
              <div className="payment-methods">
                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "cod" ? "selected" : ""
                  }`}
                  onClick={() => setPaymentMethod("cod")}
                >
                  <span className="payment-icon">💵</span>
                  Cash On Delivery
                </button>
                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "card" ? "selected" : ""
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <span className="payment-icon">💳</span>
                  Cards, JazzCash, Easypaisa
                </button>
              </div>
            </div>
          </div>

          <aside className="checkout-cart-col">
            <div className="checkout-cart-card">
              <h2>Your Cart</h2>

              <div className="checkout-cart-items">
                {cart.map((item) => (
                  <div className="checkout-cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="checkout-cart-item-info">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                      <div className="checkout-cart-item-bottom">
                        <span className="qty-badge">{item.qty}</span>
                        <span className="item-price">
                          Rs. {(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/cart" className="add-more-items">
                + Add more items
              </Link>

              <div className="checkout-promo-note">
                *To apply Promo Code, please login
              </div>

              <div className="checkout-bill-lines">
                <div>
                  <span>Subtotal</span>
                  <strong>Rs. {subtotal.toFixed(2)}</strong>
                </div>
                <div>
                  <span>Delivery Charges</span>
                  <strong>
                    {delivery === 0 ? "FREE" : `Rs. ${delivery.toFixed(2)}`}
                  </strong>
                </div>
              </div>

              <div className="checkout-grand-total">
                <span>
                  Grand total <small>(Incl. 13% TAX)</small>
                </span>
                <strong>Rs. {grandTotal.toFixed(2)}</strong>
              </div>

              <button type="submit" className="place-order-btn">
                Place Order
              </button>
            </div>
          </aside>
        </form>
      </main>
    </div>
  );
}
