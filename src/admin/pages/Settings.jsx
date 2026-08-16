import React, { useState } from "react";

export default function Settings() {
  const [restaurant, setRestaurant] = useState({
    name: "Fary Au Chocolat",
    email: "admin@faryauchocolat.com",
    phone: "0300-0000000",
    minimumOrder: 500,
    deliveryTime: "30-45 min",
  });

  function saveSettings(e) {
    e.preventDefault();

    alert("Settings saved successfully!");
  }

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Settings</h1>
          <p>Manage restaurant settings.</p>
        </div>
      </div>

      <div className="admin-panel settings-panel">
        <h3>Restaurant Information</h3>

        <form onSubmit={saveSettings}>
          <div className="settings-grid">
            <div>
              <label>Restaurant Name</label>

              <input
                value={restaurant.name}
                onChange={(e) =>
                  setRestaurant({
                    ...restaurant,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Email</label>

              <input
                value={restaurant.email}
                onChange={(e) =>
                  setRestaurant({
                    ...restaurant,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                value={restaurant.phone}
                onChange={(e) =>
                  setRestaurant({
                    ...restaurant,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Minimum Order</label>

              <input
                type="number"
                value={restaurant.minimumOrder}
                onChange={(e) =>
                  setRestaurant({
                    ...restaurant,
                    minimumOrder: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Delivery Time</label>

              <input
                value={restaurant.deliveryTime}
                onChange={(e) =>
                  setRestaurant({
                    ...restaurant,
                    deliveryTime: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button className="admin-primary-button" type="submit">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
