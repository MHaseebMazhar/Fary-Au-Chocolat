import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Mango Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
  },
  {
    id: 2,
    name: "Banana Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
  },
  {
    id: 3,
    name: "Peach Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
  },
  {
    id: 4,
    name: "Grapes Kunafa Cup",
    category: "Kunafa Cups",
    price: 1399,
    stock: "Available",
  },
  {
    id: 5,
    name: "Matcha Latte",
    category: "Matcha",
    price: 980,
    stock: "Available",
  },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "Kunafa Cups",
    price: "",
    stock: "Available",
  });

  function openAddModal() {
    setEditingProduct(null);

    setForm({
      name: "",
      category: "Kunafa Cups",
      price: "",
      stock: "Available",
    });

    setShowModal(true);
  }

  function openEditModal(product) {
    setEditingProduct(product);

    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });

    setShowModal(true);
  }

  function saveProduct(e) {
    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Please enter product name and price.");
      return;
    }

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id
            ? {
                ...product,
                ...form,
                price: Number(form.price),
              }
            : product,
        ),
      );
    } else {
      const newProduct = {
        id: Date.now(),
        ...form,
        price: Number(form.price),
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    setShowModal(false);
  }

  function deleteProduct(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Products</h1>
          <p>Manage your restaurant products.</p>
        </div>

        <button className="admin-primary-button" onClick={openAddModal}>
          + Add Product
        </button>
      </div>

      <div className="admin-panel">
        <div className="product-toolbar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select>
            <option>All Categories</option>
            <option>Kunafa Cups</option>
            <option>Chocolate Cups</option>
            <option>Frappuccino</option>
            <option>Mojito</option>
            <option>Iced Tea</option>
            <option>Hot Latte</option>
            <option>Iced Latte</option>
            <option>Coffee</option>
            <option>Matcha</option>
            <option>Beverages</option>
          </select>
        </div>

        <div className="orders-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>#{product.id}</td>

                  <td>
                    <strong>{product.name}</strong>
                  </td>

                  <td>{product.category}</td>

                  <td>
                    <strong>PKR {product.price}</strong>
                  </td>

                  <td>
                    <span className="status completed">{product.stock}</span>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        onClick={() => openEditModal(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div
          className="admin-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-heading">
              <div>
                <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

                <p>Enter product information</p>
              </div>

              <button onClick={() => setShowModal(false)}>×</button>
            </div>

            <form onSubmit={saveProduct}>
              <label>Product Name</label>

              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="Enter product name"
              />

              <label>Category</label>

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              >
                <option>Kunafa Cups</option>
                <option>Chocolate Cups</option>
                <option>Frappuccino</option>
                <option>Mojito</option>
                <option>Iced Tea</option>
                <option>Slow Bar</option>
                <option>Hot Latte</option>
                <option>Iced Latte</option>
                <option>Coffee</option>
                <option>Matcha</option>
                <option>Beverages</option>
              </select>

              <label>Price</label>

              <input
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                placeholder="Enter price"
              />

              <label>Status</label>

              <select
                value={form.stock}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stock: e.target.value,
                  })
                }
              >
                <option>Available</option>
                <option>Out of Stock</option>
              </select>

              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)}>
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
