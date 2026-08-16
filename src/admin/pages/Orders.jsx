import React, { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "#1001",
      customer: "Ali Khan",
      phone: "0300-1234567",
      total: 1399,
      status: "Completed",
      date: "16 Aug 2026",
    },
    {
      id: "#1002",
      customer: "Ahmed Raza",
      phone: "0312-9876543",
      total: 2150,
      status: "Preparing",
      date: "16 Aug 2026",
    },
    {
      id: "#1003",
      customer: "Hassan Ali",
      phone: "0333-4567890",
      total: 980,
      status: "Pending",
      date: "16 Aug 2026",
    },
    {
      id: "#1004",
      customer: "Usman",
      phone: "0345-5555555",
      total: 750,
      status: "Completed",
      date: "15 Aug 2026",
    },
  ]);

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

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders.</p>
        </div>
      </div>

      <div className="admin-panel">
        <div className="orders-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>{order.id}</strong>
                  </td>

                  <td>{order.customer}</td>

                  <td>{order.phone}</td>

                  <td>
                    <strong>PKR {order.total}</strong>
                  </td>

                  <td>{order.date}</td>

                  <td>
                    <select
                      className={`order-status-select ${order.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      value={order.status}
                      onChange={(e) => changeStatus(order.id, e.target.value)}
                    >
                      <option>Pending</option>
                      <option>Preparing</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
