import React from "react";

export default function StatCard({ icon, title, value, change }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>

        <span className="stat-change">{change}</span>
      </div>

      <div className="stat-title">{title}</div>

      <div className="stat-value">{value}</div>
    </div>
  );
}
