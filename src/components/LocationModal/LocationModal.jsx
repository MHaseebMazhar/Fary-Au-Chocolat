import React, { useState } from "react";
import "./LocationModal.css";

export default function LocationModal({
  onSelect,
  restaurantName = "Fary Au Chocolat",
}) {
  const [orderType, setOrderType] = useState("Delivery");
  const [selectedArea, setSelectedArea] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  // Islamabad Areas / Sectors
  const islamabadAreas = [
    "F-5",
    "F-6",
    "F-7",
    "F-8",
    "F-9",
    "F-10",
    "F-11",
    "F-12",
    "F-13",
    "F-14",

    "G-5",
    "G-6",
    "G-7",
    "G-8",
    "G-9",
    "G-10",
    "G-11",
    "G-12",
    "G-13",
    "G-14",
    "G-15",

    "E-7",
    "E-8",
    "E-9",
    "E-11",
    "E-12",

    "H-8",
    "H-9",
    "H-10",
    "H-11",
    "H-12",

    "I-8",
    "I-9",
    "I-10",
    "I-11",
    "I-12",
    "I-13",
    "I-14",

    "D-12",
    "D-13",
    "D-14",
    "D-17",

    "B-17",
    "B-18",

    "C-15",
    "C-16",

    "Margalla Hills",
    "Bani Gala",
    "Korang Town",
    "Soan Garden",
    "Park View City",
    "PWD",
    "Khayaban-e-Iqbal",
    "DHA Islamabad",
    "Bahria Town Islamabad",

    // Added areas
    "Bhatti Town",
    "Aabpara Market",
    "Airport Housing Society",
    "Al-Meher Colony",
    "Azeem Town",
    "Babar Colony",
    "Bahria Town phase 2",
    "Bahria Town Phase 4",
    "Blue Area",
    "Canyon Views",
    "Canyon Views M1",
    "Chaklala Railway Scheme 1",
    "D-12 Markaz",
    "D-12/1",
    "D-12/2",
    "D-12/3",
    "D-12/4",
    "DHA Phase 2 - Sector A",
    "DHA Phase 2 - Sector B",
    "DHA Phase 2 - Sector C",
    "DHA Phase 2 - Sector F",
    "DHA Phase 2 - Sector G",
    "DHA Phase 5 - Sector B",
    "DHA Phase 5 Sector A",
    "DHA Phase II",
    "Dhoak Allah Dita",
    "Dhoke Choor",
    "Dhoke Gangal",
    "E-10",
    "E-11/1",
    "E-11/2",
    "E-11/3",
    "E-11/4",
    "E-9/1",
    "F-10/1",
    "F-10/2",
    "F-10/3",
    "F-10/4",
    "F-11/1",
    "F-11/3",
    "F-11/4",
    "F-5/1",
    "F-5/2",
    "F-6/1",
    "F-6/2",
    "F-6/4",
    "F-7 Markaz",
    "F-7/1",
    "F-7/2",
    "F-7/3",
    "F-7/4",
    "F-8/3",
    "Faisal Colony",
    "Fazaia Colony",
    "Fazal Town",
    "Fazal Town Phase 1",
    "FECHS",
    "France Colony",
    "Frash Town",
    "G-10 Markaz",
    "G-10/1",
    "G-10/2",
    "G-10/3",
    "G-10/4",
    "G-11/1",
    "G-11/2",
    "G-11/3",
    "G-11/4",
    "G-12 Markaz",
    "G-5/2",
    "G-6/1",
    "G-6/2",
    "G-6/4",
    "G-7",
    "G-7/1",
    "G-7/2",
    "G-7/4",
    "G-8/4",
    "G-9/1",
    "G-9/2",
    "G-9/3",
    "G-9/4",
    "Ghauri Town",
    "Ghauri Town Phase 2",
    "Ghauri Town Phase 3",
    "Ghauri Town Phase 4",
    "Ghauri Town Phase 4-A",
    "Ghauri Town Phase 4-B",
    "Ghauri Town Phase 5",
    "Ghauri Town Phase 5-A",
    "Ghauri Town Phase 5-B",
    "Giga mall",
    "Golra",
    "Gulberg Executive Block",
    "Gulberg Greens",
    "I-8/2",
    "I-8/3",
    "I-8/4",
    "I-9/1",
    "I-9/2",
    "I-9/3",
    "I-9/4",
    "Institute of Space Technology (IST)",
    "Jacaranda Family Club",
    "Judicial Colony",
    "Kak Pull",
    "Lawyer colony",
    "Madina Town",
    "Mangral Town",
    "Model Town Humak",
    "Mohri maira Chak 30 Ac and Ad",
    "MPCHS - Islamabad Garden",
    "Rawat",
    "River Gardens Housing Scheme",
    "Sangar Town",
    "Sector VIP, Sector 4",
    "Services Society",
    "Shah Khalid Colony",
    "Shaheen town",
    "Shifa society",
    "Zaraj Housing Society",
    "Zeta mall",
  ];

  const handleSubmit = () => {
    if (!selectedArea && !useCurrentLocation) {
      alert("Please select your area");
      return;
    }

    onSelect({
      orderType,
      city: "Islamabad",
      location: selectedArea || "Current Location",
    });
  };

  return (
    <div className="location-modal-overlay">
      <div className="location-modal">
        {/* Logo */}
        <div className="modal-header">
          <div className="modal-logo">Fary Au Chocolat</div>
        </div>

        {/* Order Type */}
        <div className="modal-section">
          <label className="section-label">Select your order type</label>

          <div className="order-type-buttons">
            <button
              type="button"
              className={`order-btn ${
                orderType === "Delivery" ? "active" : ""
              }`}
              onClick={() => setOrderType("Delivery")}
            >
              Delivery
            </button>

            <button
              type="button"
              className={`order-btn ${orderType === "Pickup" ? "active" : ""}`}
              onClick={() => setOrderType("Pickup")}
            >
              Pick-Up
            </button>

            <button
              type="button"
              className={`order-btn ${orderType === "CarHop" ? "active" : ""}`}
              onClick={() => setOrderType("CarHop")}
            >
              Car-Hop
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="modal-section">
          <label className="section-label">Please select your location</label>

          {/* Current Location */}
          <div className="current-location">
            <input
              type="checkbox"
              id="useCurrentLoc"
              checked={useCurrentLocation}
              onChange={(e) => {
                setUseCurrentLocation(e.target.checked);

                if (e.target.checked) {
                  setSelectedArea("");
                }
              }}
            />

            <label htmlFor="useCurrentLoc">⦿ Use Current Location</label>
          </div>

          {!useCurrentLocation && (
            <>
              {/* City */}
              <div className="location-select-group">
                <label htmlFor="citySelect" className="dropdown-label">
                  Select City / Region
                </label>

                <select
                  id="citySelect"
                  className="location-dropdown"
                  value="Islamabad"
                  disabled
                >
                  <option value="Islamabad">Islamabad</option>
                </select>
              </div>

              {/* Area */}
              <div className="location-select-group">
                <label htmlFor="areaSelect" className="dropdown-label">
                  Select Area / Sub Region
                </label>

                <select
                  id="areaSelect"
                  className="location-dropdown"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                >
                  <option value="">Select Area / Sub Region</option>

                  {islamabadAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>

        {/* Continue */}
        <button
          type="button"
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!selectedArea && !useCurrentLocation}
        >
          Select
        </button>
      </div>
    </div>
  );
}
