import React, { useEffect, useState } from "react";

/* =========================================================
   CATEGORIES
========================================================= */

const CATEGORIES = [
  "Kunafa Cups",
  "Chocolate Cups",
  "Frappuccino",
  "Mojito",
  "Iced Tea",
  "Slow Bar",
  "Hot Latte",
  "Iced Latte",
  "Coffee",
  "Matcha",
  "Beverages",
];

/* =========================================================
   INITIAL PRODUCTS
   Images are taken from RestaurantPage.jsx
========================================================= */

const initialProducts = [
  // =======================================================
  // Kunafa Cups
  // =======================================================

  {
    id: 1,
    name: "Mango Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008037/6e9b9951-b970-4d2d-bf63-a77fa81382ba.jpg?width=128&height=128",
  },
  {
    id: 2,
    name: "Banana Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008038/5d867e81-1c13-43de-bc9a-1ddbe2abbff1.jpg?width=128&height=128",
  },
  {
    id: 3,
    name: "Peach Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008040/be903b62-b03d-4b2f-aab6-a019238267a8.jpg?width=150&height=150",
  },
  {
    id: 4,
    name: "Grapes Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008041/c2e5ed6c-ca6b-47da-9fe1-3305a68903ef.jpg?width=150&height=150",
  },

  // =======================================================
  // Chocolate Cups
  // =======================================================

  {
    id: 5,
    name: "Mango Chocolate Cup",
    category: "Chocolate Cups",
    price: 1199,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008032/18a93868-eb55-4508-9e3f-03ba8e0c69c6.jpg?width=150&height=150",
  },
  {
    id: 6,
    name: "Banana Chocolate Cup",
    category: "Chocolate Cups",
    price: 1199,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008033/2cee9708-e05f-4d51-9b0f-579e5c357ecc.jpg?width=150&height=150",
  },
  {
    id: 7,
    name: "Peach Chocolate Cup",
    category: "Chocolate Cups",
    price: 1199,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008035/7f12163e-901a-465a-8c9f-a174e7686790.jpg?width=150&height=150",
  },
  {
    id: 8,
    name: "Grapes Chocolate Cups",
    category: "Chocolate Cups",
    price: 1199,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008036/4856b8c4-2ea2-4543-b0ae-9b3c86b5aaff.jpg?width=150&height=150",
  },

  // =======================================================
  // Frappuccino
  // =======================================================

  {
    id: 9,
    name: "Mocha",
    category: "Frappuccino",
    price: 950,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807626.jpg?width=150&height=150",
  },
  {
    id: 10,
    name: "Vanilla",
    category: "Frappuccino",
    price: 950,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807627.jpg?width=150&height=150",
  },
  {
    id: 11,
    name: "Hazelnut",
    category: "Frappuccino",
    price: 950,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807628.jpg?width=150&height=150",
  },
  {
    id: 12,
    name: "Double Chocolate",
    category: "Frappuccino",
    price: 950,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807629.jpg?width=150&height=150",
  },
  {
    id: 13,
    name: "Caramel",
    category: "Frappuccino",
    price: 950,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807630.jpg?width=150&height=150",
  },
  {
    id: 14,
    name: "Biscoff",
    category: "Frappuccino",
    price: 950,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807631.jpg?width=150&height=150",
  },

  // =======================================================
  // Mojito
  // =======================================================

  {
    id: 15,
    name: "Lemonade",
    category: "Mojito",
    price: 530,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807632.jpg?width=150&height=150",
  },
  {
    id: 16,
    name: "Passion Fruit Mojito",
    category: "Mojito",
    price: 530,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807633.jpg?width=150&height=150",
  },
  {
    id: 17,
    name: "Strawberry Mojito",
    category: "Mojito",
    price: 530,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807634.jpg?width=150&height=150",
  },
  {
    id: 18,
    name: "Pomegranate Mojito",
    category: "Mojito",
    price: 530,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807635.jpg?width=150&height=150",
  },

  // =======================================================
  // Iced Tea
  // =======================================================

  {
    id: 19,
    name: "Peach Iced Tea",
    category: "Iced Tea",
    price: 550,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807636.jpg?width=150&height=150",
  },
  {
    id: 20,
    name: "Strawberry Iced Tea",
    category: "Iced Tea",
    price: 550,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807637.jpg?width=150&height=150",
  },
  {
    id: 21,
    name: "Passion Fruit Iced Tea",
    category: "Iced Tea",
    price: 550,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807638.jpg?width=150&height=150",
  },
  {
    id: 22,
    name: "Pomegranate Iced Tea",
    category: "Iced Tea",
    price: 550,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807639.jpg?width=150&height=150",
  },

  // =======================================================
  // Slow Bar
  // =======================================================

  {
    id: 23,
    name: "V60",
    category: "Slow Bar",
    price: 800,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807640.jpg?width=150&height=150",
  },
  {
    id: 24,
    name: "Aeropress",
    category: "Slow Bar",
    price: 800,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807641.jpg?width=150&height=150",
  },

  // =======================================================
  // Hot Latte
  // =======================================================

  {
    id: 25,
    name: "Espresso",
    category: "Hot Latte",
    price: 450,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807642.jpg?width=150&height=150",
  },
  {
    id: 26,
    name: "Cortado",
    category: "Hot Latte",
    price: 650,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807643.jpg?width=150&height=150",
  },
  {
    id: 27,
    name: "Cappuccino",
    category: "Hot Latte",
    price: 700,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807644.jpg?width=150&height=150",
  },
  {
    id: 28,
    name: "Latte",
    category: "Hot Latte",
    price: 700,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807645.jpg?width=150&height=150",
  },
  {
    id: 29,
    name: "Americano",
    category: "Hot Latte",
    price: 650,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807646.jpg?width=150&height=150",
  },
  {
    id: 30,
    name: "Flat White",
    category: "Hot Latte",
    price: 650,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807647.jpg?width=150&height=150",
  },
  {
    id: 31,
    name: "Spanish Latte",
    category: "Hot Latte",
    price: 730,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807648.jpg?width=150&height=150",
  },
  {
    id: 32,
    name: "Mocha Hot Latte",
    category: "Hot Latte",
    price: 730,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807649.jpg?width=150&height=150",
  },
  {
    id: 33,
    name: "Caramel Latte",
    category: "Hot Latte",
    price: 700,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807650.jpg?width=150&height=150",
  },

  // =======================================================
  // Iced Latte
  // =======================================================

  {
    id: 34,
    name: "Cinnamon Latte",
    category: "Iced Latte",
    price: 750,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807652.jpg?width=150&height=150",
  },
  {
    id: 35,
    name: "Iced Spanish Latte",
    category: "Iced Latte",
    price: 750,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807653.jpg?width=150&height=150",
  },
  {
    id: 36,
    name: "Iced Mocha",
    category: "Iced Latte",
    price: 800,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807654.jpg?width=150&height=150",
  },
  {
    id: 37,
    name: "Iced Americano",
    category: "Iced Latte",
    price: 700,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807655.jpg?width=150&height=150",
  },
  {
    id: 38,
    name: "Iced Caramel Latte",
    category: "Iced Latte",
    price: 450,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807656.jpg?width=150&height=150",
  },
  {
    id: 39,
    name: "Honey Latte",
    category: "Iced Latte",
    price: 750,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807657.jpg?width=150&height=150",
  },
  {
    id: 40,
    name: "Iced Vanilla Latte",
    category: "Iced Latte",
    price: 750,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807658.jpg?width=150&height=150",
  },
  {
    id: 41,
    name: "Iced Hazelnut Latte",
    category: "Iced Latte",
    price: 750,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807660.jpg?width=150&height=150",
  },

  // =======================================================
  // Coffee
  // =======================================================

  {
    id: 42,
    name: "Hot Chocolate",
    category: "Coffee",
    price: 800,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807661.jpg?width=150&height=150",
  },
  {
    id: 43,
    name: "Iced Chocolate Deluxe",
    category: "Coffee",
    price: 850,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807662.jpg?width=150&height=150",
  },

  // =======================================================
  // Matcha
  // =======================================================

  {
    id: 44,
    name: "Matcha Latte",
    category: "Matcha",
    price: 980,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807664.jpg?width=150&height=150",
  },
  {
    id: 45,
    name: "Spanish Matcha",
    category: "Matcha",
    price: 1050,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807665.jpg?width=150&height=150",
  },
  {
    id: 46,
    name: "Strawberry Matcha",
    category: "Matcha",
    price: 1150,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99807666.jpg?width=150&height=150",
  },

  // =======================================================
  // Beverages
  // =======================================================

  {
    id: 47,
    name: "Nestle Water - 500ml",
    category: "Beverages",
    price: 100,
    stock: "Available",
    image:
      "https://images.deliveryhero.io/image/fd-pk/Products/99822039.jpg?width=150&height=150",
  },
];

/* =========================================================
   PRODUCTS COMPONENT
========================================================= */

export default function Products() {
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("adminProducts");

      if (savedProducts) {
        const parsedProducts = JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          return parsedProducts;
        }
      }
    } catch (error) {
      console.error("Unable to load products:", error);
    }

    return initialProducts;
  });

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "Kunafa Cups",
    price: "",
    stock: "Available",
    image: "",
  });

  /* =========================================================
     SAVE PRODUCTS TO LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    try {
      localStorage.setItem("adminProducts", JSON.stringify(products));
    } catch (error) {
      console.error("Unable to save products:", error);
    }
  }, [products]);

  /* =========================================================
     OPEN ADD MODAL
  ========================================================= */

  function openAddModal() {
    setEditingProduct(null);

    setForm({
      name: "",
      category: "Kunafa Cups",
      price: "",
      stock: "Available",
      image: "",
    });

    setShowModal(true);
  }

  /* =========================================================
     OPEN EDIT MODAL
  ========================================================= */

  function openEditModal(product) {
    setEditingProduct(product);

    setForm({
      name: product.name || "",
      category: product.category || "Kunafa Cups",
      price: product.price || "",
      stock: product.stock || "Available",
      image: product.image || "",
    });

    setShowModal(true);
  }

  /* =========================================================
     SAVE PRODUCT
  ========================================================= */

  function saveProduct(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter product name.");
      return;
    }

    if (!form.price || Number(form.price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    if (!form.image.trim()) {
      alert("Please enter product image URL.");
      return;
    }

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id
            ? {
                ...product,
                name: form.name.trim(),
                category: form.category,
                price: Number(form.price),
                stock: form.stock,
                image: form.image.trim(),
              }
            : product,
        ),
      );
    } else {
      const newProduct = {
        id: Date.now(),
        name: form.name.trim(),
        category: form.category,
        price: Number(form.price),
        stock: form.stock,
        image: form.image.trim(),
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    setShowModal(false);

    setEditingProduct(null);

    setForm({
      name: "",
      category: "Kunafa Cups",
      price: "",
      stock: "Available",
      image: "",
    });
  }

  /* =========================================================
     DELETE PRODUCT
  ========================================================= */

  function deleteProduct(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) {
      return;
    }

    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  /* =========================================================
     FORM CHANGE
  ========================================================= */

  function updateForm(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  function closeModal() {
    setShowModal(false);
    setEditingProduct(null);
  }

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="page-heading">
        <div>
          <h1>Products</h1>

          <p>Manage your restaurant products.</p>
        </div>

        <button
          type="button"
          className="admin-primary-button"
          onClick={openAddModal}
        >
          + Add Product
        </button>
      </div>

      {/* =====================================================
          PRODUCTS PANEL
      ===================================================== */}

      <div className="admin-panel">
        {/* ===================================================
            TOOLBAR
        =================================================== */}

        <div className="product-toolbar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Categories</option>

            {CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* ===================================================
            PRODUCTS TABLE
        =================================================== */}

        <div className="orders-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                    }}
                  >
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    {/* IMAGE */}

                    <td>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            border: "1px solid #eee",
                            display: "block",
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "10px",
                            background: "#f3f3f3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            color: "#777",
                            textAlign: "center",
                          }}
                        >
                          No Image
                        </div>
                      )}
                    </td>

                    {/* ID */}

                    <td>
                      <strong>#{product.id}</strong>
                    </td>

                    {/* PRODUCT */}

                    <td>
                      <strong>{product.name}</strong>
                    </td>

                    {/* CATEGORY */}

                    <td>{product.category}</td>

                    {/* PRICE */}

                    <td>
                      <strong>
                        PKR {Number(product.price).toLocaleString()}
                      </strong>
                    </td>

                    {/* STATUS */}

                    <td>
                      <span
                        className={
                          product.stock === "Available"
                            ? "status completed"
                            : "status cancelled"
                        }
                      >
                        {product.stock}
                      </span>
                    </td>

                    {/* ACTIONS */}

                    <td>
                      <div className="action-buttons">
                        <button
                          type="button"
                          className="edit-button"
                          onClick={() => openEditModal(product)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() => deleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================================================
          ADD / EDIT MODAL
      ===================================================== */}

      {showModal && (
        <div className="admin-modal-overlay" onClick={closeModal}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="modal-heading">
              <div>
                <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

                <p>Enter product information</p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="modal-close-button"
              >
                ×
              </button>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form onSubmit={saveProduct}>
              {/* PRODUCT NAME */}

              <label>Product Name</label>

              <input
                type="text"
                value={form.name}
                onChange={(e) => updateForm("name", e.target.value)}
                placeholder="Enter product name"
              />

              {/* CATEGORY */}

              <label>Category</label>

              <select
                value={form.category}
                onChange={(e) => updateForm("category", e.target.value)}
              >
                {CATEGORIES.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              {/* PRICE */}

              <label>Price</label>

              <input
                type="number"
                min="1"
                value={form.price}
                onChange={(e) => updateForm("price", e.target.value)}
                placeholder="Enter price"
              />

              {/* IMAGE URL */}

              <label>Product Image URL</label>

              <input
                type="url"
                value={form.image}
                onChange={(e) => updateForm("image", e.target.value)}
                placeholder="Paste product image URL"
              />

              {/* IMAGE PREVIEW */}

              {form.image && (
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "7px",
                      fontSize: "13px",
                      color: "#666",
                    }}
                  >
                    Image Preview
                  </p>

                  <img
                    src={form.image}
                    alt="Product Preview"
                    style={{
                      width: "110px",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      border: "1px solid #ddd",
                      display: "block",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              {/* STATUS */}

              <label>Status</label>

              <select
                value={form.stock}
                onChange={(e) => updateForm("stock", e.target.value)}
              >
                <option>Available</option>
                <option>Out of Stock</option>
              </select>

              {/* =================================================
                  MODAL ACTIONS
              ================================================= */}

              <div className="modal-actions">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>

                <button type="submit" className="admin-primary-button">
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
