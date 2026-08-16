import React from "react";

export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="admin-header">
      <button className="admin-menu-button" onClick={onMenuClick}>
        ☰
      </button>

      <div className="admin-header-title">
        <h2>Admin Dashboard</h2>
        <p>Manage your restaurant</p>
      </div>

      <div className="admin-header-right">
        <button className="admin-notification">
          🔔
          <span>3</span>
        </button>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>

          <div>
            <strong>Administrator</strong>
            <small>Super Admin</small>
          </div>
        </div>
      </div>
    </header>
  );
}
