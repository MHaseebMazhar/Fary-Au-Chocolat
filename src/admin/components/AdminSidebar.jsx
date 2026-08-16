import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
  onLogout,
}) {
  return (
    <>
      <div
        className={`admin-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={`admin-sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
        <div className="admin-logo">
          <div className="admin-logo-icon">🍫</div>

          <div>
            <strong>Fary Au Chocolat</strong>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/dashboard" onClick={() => setSidebarOpen(false)}>
            <span>📊</span>
            Dashboard
          </NavLink>

          <NavLink to="/admin/products" onClick={() => setSidebarOpen(false)}>
            <span>🍫</span>
            Products
          </NavLink>

          <NavLink to="/admin/orders" onClick={() => setSidebarOpen(false)}>
            <span>🛒</span>
            Orders
          </NavLink>

          <NavLink to="/admin/customers" onClick={() => setSidebarOpen(false)}>
            <span>👥</span>
            Customers
          </NavLink>

          <NavLink to="/admin/categories" onClick={() => setSidebarOpen(false)}>
            <span>📂</span>
            Categories
          </NavLink>

          <NavLink to="/admin/settings" onClick={() => setSidebarOpen(false)}>
            <span>⚙️</span>
            Settings
          </NavLink>
        </nav>

        <div className="admin-sidebar-bottom">
          <button onClick={onLogout}>
            <span>🚪</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
