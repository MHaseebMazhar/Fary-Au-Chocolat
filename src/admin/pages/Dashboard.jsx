import React from "react";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const recentOrders = [
    {
      id: "#1001",
      customer: "Ali Khan",
      items: "Mango Kunafa Cup",
      amount: "PKR 1,399",
      status: "Completed",
    },
    {
      id: "#1002",
      customer: "Ahmed Raza",
      items: "Iced Spanish Latte",
      amount: "PKR 750",
      status: "Preparing",
    },
    {
      id: "#1003",
      customer: "Hassan Ali",
      items: "Matcha Latte",
      amount: "PKR 980",
      status: "Pending",
    },
    {
      id: "#1004",
      customer: "Usman",
      items: "Chocolate Cup",
      amount: "PKR 1,199",
      status: "Completed",
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

        <button className="admin-primary-button">+ New Order</button>
      </div>

      <div className="stats-grid">
        <StatCard
          icon="💰"
          title="Total Sales"
          value="PKR 248,500"
          change="+12.5%"
        />

        <StatCard icon="🛒" title="Total Orders" value="186" change="+8.2%" />

        <StatCard icon="🍫" title="Products" value="47" change="+3" />

        <StatCard icon="👥" title="Customers" value="324" change="+14.4%" />
      </div>

      <div className="dashboard-grid">
        <div className="admin-panel">
          <div className="panel-heading">
            <div>
              <h3>Recent Orders</h3>
              <p>Latest customer orders</p>
            </div>

            <button>View All</button>
          </div>

          <div className="orders-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <strong>{order.id}</strong>
                    </td>

                    <td>{order.customer}</td>

                    <td>{order.items}</td>

                    <td>
                      <strong>{order.amount}</strong>
                    </td>

                    <td>
                      <span
                        className={`status ${order.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-panel">
          <div className="panel-heading">
            <div>
              <h3>Popular Products</h3>
              <p>Best selling items</p>
            </div>
          </div>

          <div className="popular-products">
            <div className="popular-product">
              <div className="popular-number">1</div>
              <div>
                <strong>Mango Kunafa Cup</strong>
                <span>32 orders</span>
              </div>
              <strong>PKR 1,399</strong>
            </div>

            <div className="popular-product">
              <div className="popular-number">2</div>
              <div>
                <strong>Matcha Latte</strong>
                <span>27 orders</span>
              </div>
              <strong>PKR 980</strong>
            </div>

            <div className="popular-product">
              <div className="popular-number">3</div>
              <div>
                <strong>Iced Spanish Latte</strong>
                <span>24 orders</span>
              </div>
              <strong>PKR 750</strong>
            </div>

            <div className="popular-product">
              <div className="popular-number">4</div>
              <div>
                <strong>Hot Chocolate</strong>
                <span>21 orders</span>
              </div>
              <strong>PKR 800</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
