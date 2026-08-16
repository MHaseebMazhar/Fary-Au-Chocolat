import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

const ORDER_STATUSES = [
  { key: "placed", label: "Order Placed", icon: "🧾" },
  { key: "preparing", label: "Preparing", icon: "👨‍🍳" },
  { key: "out", label: "Out for Delivery", icon: "🛵" },
  { key: "delivered", label: "Delivered", icon: "🎉" },
];

const STATUS_MESSAGES = {
  placed: "We've received your order and it's being confirmed.",
  preparing: "Your order is being freshly prepared in the kitchen.",
  out: "Your order is on the way to your address.",
  delivered: "Your order has been delivered. Enjoy!",
};

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (!data) return undefined;

    const timers = [
      setTimeout(() => setStatusIndex(1), 4000),
      setTimeout(() => setStatusIndex(2), 12000),
      setTimeout(() => setStatusIndex(3), 22000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [data]);

  if (!data) {
    return (
      <div className="order-confirmation">
        <div className="order-empty-card">
          <h1>No order found</h1>
          <p>Looks like you landed here directly. Place an order first.</p>
          <button className="back-home-btn" onClick={() => navigate("/")}>
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const {
    orderId,
    customer,
    items,
    subtotal,
    delivery,
    tax,
    discount,
    grandTotal,
  } = data;

  return (
    <div className="order-confirmation">
      <header className="order-header">
        <div className="order-header-inner">
          <Link to="/" className="order-logo">
            Fary Au Chocolat
          </Link>
        </div>
      </header>

      <main className="order-container">
        <div className="order-success-banner">
          <div className="order-success-icon">✓</div>
          <h1>Order Placed!</h1>
          <p>
            Thank you{customer?.name ? `, ${customer.name}` : ""}. Your order
            has been received.
          </p>
          <div className="order-id">Order ID: {orderId}</div>

          <div className="status-tracker">
            {ORDER_STATUSES.map((s, i) => {
              const isCompleted = i < statusIndex;
              const isActive = i === statusIndex;
              return (
                <div className="status-step" key={s.key}>
                  <div className="status-step-line-wrap">
                    {i !== 0 && (
                      <div
                        className={`status-line ${
                          i <= statusIndex ? "filled" : ""
                        }`}
                      />
                    )}
                  </div>
                  <div
                    className={`status-circle ${
                      isCompleted ? "completed" : ""
                    } ${isActive ? "active" : ""}`}
                  >
                    {isCompleted ? "✓" : s.icon}
                  </div>
                  <div className={`status-label ${isActive ? "active" : ""}`}>
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="status-current-message">
            {statusIndex < ORDER_STATUSES.length - 1 && (
              <span className="status-pulse-dot" />
            )}
            {STATUS_MESSAGES[ORDER_STATUSES[statusIndex].key]}
          </div>
        </div>

        <div className="order-details-grid">
          <section className="order-items-card">
            <div className="order-card-heading">
              <h2>Order Items</h2>
              <span>{items.length} items</span>
            </div>

            <div className="order-items-list">
              {items.map((item) => (
                <div className="order-item-row" key={item.id}>
                  <div className="order-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="order-item-info">
                    <h3>{item.name}</h3>
                    <span>Qty: {item.qty}</span>
                  </div>
                  <div className="order-item-price">
                    PKR {item.price * item.qty}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="order-summary-card">
            <div className="order-summary-block">
              <h2>Delivery Details</h2>
              <div className="order-delivery-info">
                <div>
                  <span>Name</span>
                  <strong>{customer.name}</strong>
                </div>
                <div>
                  <span>Phone</span>
                  <strong>{customer.phone}</strong>
                </div>
                <div>
                  <span>Address</span>
                  <strong>{customer.address}</strong>
                </div>
              </div>
            </div>

            <div className="order-summary-block">
              <h2>Bill Summary</h2>
              <div className="order-bill-lines">
                <div>
                  <span>Subtotal</span>
                  <strong>PKR {subtotal}</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>{delivery === 0 ? "FREE" : `PKR ${delivery}`}</strong>
                </div>
                <div>
                  <span>Tax</span>
                  <strong>PKR {tax}</strong>
                </div>
                {discount > 0 && (
                  <div className="order-discount-row">
                    <span>Discount</span>
                    <strong>-PKR {discount}</strong>
                  </div>
                )}
              </div>

              <div className="order-total-row">
                <span>Total Paid</span>
                <strong>PKR {grandTotal}</strong>
              </div>
            </div>

            <button className="back-home-btn" onClick={() => navigate("/")}>
              Back to Menu
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
