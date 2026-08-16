import React from "react";

export default function Customers() {
  const customers = [
    {
      name: "Ali Khan",
      email: "ali@example.com",
      orders: 12,
      spent: 18500,
    },
    {
      name: "Ahmed Raza",
      email: "ahmed@example.com",
      orders: 8,
      spent: 12300,
    },
    {
      name: "Hassan Ali",
      email: "hassan@example.com",
      orders: 6,
      spent: 9400,
    },
    {
      name: "Usman",
      email: "usman@example.com",
      orders: 4,
      spent: 6100,
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Customers</h1>
          <p>View your registered customers.</p>
        </div>
      </div>

      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Total Spent</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.email}>
                <td>
                  <strong>{customer.name}</strong>
                </td>

                <td>{customer.email}</td>

                <td>{customer.orders}</td>

                <td>
                  <strong>PKR {customer.spent}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
