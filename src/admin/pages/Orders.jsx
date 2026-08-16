import React, { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "#1001",
      customer: "Ali Khan",
      phone: "0300-1234567",
      address: "House 123, Street 5, G-15, Islamabad",
      total: 1399,
      status: "Completed",
      date: "16 Aug 2026",
      time: "11:42 AM",
    },
    {
      id: "#1002",
      customer: "Ahmed Raza",
      phone: "0312-9876543",
      address: "House 45, Street 8, F-10, Islamabad",
      total: 2150,
      status: "Preparing",
      date: "16 Aug 2026",
      time: "02:18 PM",
    },
    {
      id: "#1003",
      customer: "Hassan Ali",
      phone: "0333-4567890",
      address: "House 78, Street 2, I-8, Islamabad",
      total: 980,
      status: "Pending",
      date: "16 Aug 2026",
      time: "06:35 PM",
    },
    {
      id: "#1004",
      customer: "Usman",
      phone: "0345-5555555",
      address: "House 12, Street 4, Bahria Town, Rawalpindi",
      total: 750,
      status: "Completed",
      date: "15 Aug 2026",
      time: "09:20 PM",
    },
    {
      id: "#1005",
      customer: "Bilal Ahmed",
      phone: "0301-2223334",
      address: "House 21, Street 6, G-11, Islamabad",
      total: 1650,
      status: "Pending",
      date: "17 Aug 2026",
      time: "10:15 AM",
    },
    {
      id: "#1006",
      customer: "Hamza Khan",
      phone: "0321-8887776",
      address: "House 89, Street 3, E-11, Islamabad",
      total: 1250,
      status: "Preparing",
      date: "17 Aug 2026",
      time: "11:05 AM",
    },
  ]);

  const [activeTab, setActiveTab] = useState("All");

  function changeStatus(id, status) {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
            }
          : order,
      ),
    );
  }

  const tabs = [
    "All",
    "Pending",
    "Preparing",
    "Completed",
    "Cancelled",
  ];

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  function getCount(status) {
    if (status === "All") {
      return orders.length;
    }

    return orders.filter((order) => order.status === status).length;
  }

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="page-heading">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders.</p>
        </div>
      </div>

      {/* ORDER STATUS TABS */}
      <div className="order-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`order-tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}

            <span className="order-tab-count">
              {getCount(tab)}
            </span>
          </button>
        ))}
      </div>

      {/* ORDERS PANEL */}
      <div className="admin-panel">
        <div className="orders-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Total</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id}>
                    {/* ORDER */}
                    <td>
                      <strong>{order.id}</strong>
                    </td>

                    {/* CUSTOMER */}
                    <td>
                      <strong>{order.customer}</strong>
                    </td>

                    {/* PHONE */}
                    <td>{order.phone}</td>

                    {/* ADDRESS */}
                    <td>
                      <div className="order-address">
                        📍 {order.address}
                      </div>
                    </td>

                    {/* TOTAL */}
                    <td>
                      <strong>PKR {order.total.toLocaleString()}</strong>
                    </td>

                    {/* DATE + TIME */}
                    <td>
                      <div className="order-date-time">
                        <div>{order.date}</div>
                        <small>🕐 {order.time}</small>
                      </div>
                    </td>

                    {/* STATUS */}
                    <td>
                      <select
                        className={`order-status-select ${order.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        value={order.status}
                        onChange={(e) =>
                          changeStatus(
                            order.id,
                            e.target.value,
                          )
                        }
                      >
                        <option>Pending</option>
                        <option>Preparing</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      padding: "40px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "32px",
                        marginBottom: "10px",
                      }}
                    >
                      📦
                    </div>

                    <strong>
                      No {activeTab.toLowerCase()} orders
                    </strong>

                    <p
                      style={{
                        marginTop: "6px",
                        color: "#888",
                      }}
                    >
                      There are currently no orders in this
                      category.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}