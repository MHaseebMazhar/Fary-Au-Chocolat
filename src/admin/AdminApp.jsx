import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";

import "./AdminApp.css";

export default function AdminApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  }

  return (
    <div className="admin-layout">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={logout}
      />

      <div className="admin-main">
        <AdminHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="admin-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/admin/dashboard" replace />}
            />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/products" element={<Products />} />

            <Route path="/orders" element={<Orders />} />

            <Route path="/customers" element={<Customers />} />

            <Route path="/categories" element={<Categories />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
