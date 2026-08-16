import React, { useState } from "react";
import "./LocationModal.css";

export default function LocationModal({
  onSelect,
  restaurantName = "Fary Au Chocolat",
}) {
  const [orderType, setOrderType] = useState("Delivery");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const locations = [
    "Karachi - Defence",
    "Karachi - Clifton",
    "Karachi - DHA Phase 5",
    "Lahore - Main Market",
    "Lahore - DHA",
    "Islamabad - F-7",
  ];

  const handleSubmit = () => {
    if (!selectedLocation && !useCurrentLocation) {
      alert("Please select a location");
      return;
    }
    onSelect({ orderType, location: selectedLocation || "Current Location" });
  };

  return (
    <div className="location-modal-overlay">
      <div className="location-modal">
        {/* Header with Logo */}
        <div className="modal-header">
          <div className="modal-logo">🍫</div>
          <h2>{restaurantName}</h2>
        </div>

        {/* Order Type Selection */}
        <div className="modal-section">
          <label className="section-label">Select your order type</label>
          <div className="order-type-buttons">
            <button
              className={`order-btn ${orderType === "Delivery" ? "active" : ""}`}
              onClick={() => setOrderType("Delivery")}
            >
              🚚 Delivery
            </button>
            <button
              className={`order-btn ${orderType === "Pickup" ? "active" : ""}`}
              onClick={() => setOrderType("Pickup")}
            >
              🛍️ Pick-Up
            </button>
            <button
              className={`order-btn ${orderType === "CarHop" ? "active" : ""}`}
              onClick={() => setOrderType("CarHop")}
            >
              🚗 Car-Hop
            </button>
          </div>
        </div>

        {/* Location Selection */}
        <div className="modal-section">
          <label className="section-label">Please select your location</label>

          {/* Use Current Location */}
          <div className="current-location">
            <input
              type="checkbox"
              id="useCurrentLoc"
              checked={useCurrentLocation}
              onChange={(e) => {
                setUseCurrentLocation(e.target.checked);
                if (e.target.checked) setSelectedLocation("");
              }}
            />
            <label htmlFor="useCurrentLoc">📍 Use Current Location</label>
          </div>

          {/* City/Region Dropdown */}
          {!useCurrentLocation && (
            <div className="location-select-group">
              <label htmlFor="locationSelect" className="dropdown-label">
                Select City / Region
              </label>
              <select
                id="locationSelect"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="location-dropdown"
              >
                <option value="">-- Select Location --</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!selectedLocation && !useCurrentLocation}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
