import React, { useState } from "react";

export default function Categories() {

  const [categories, setCategories] = useState([
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
  ]);

  const [newCategory, setNewCategory] =
    useState("");

  function addCategory() {

    const name = newCategory.trim();

    if (!name) return;

    if (categories.includes(name)) {
      alert("Category already exists.");
      return;
    }

    setCategories([
      ...categories,
      name,
    ]);

    setNewCategory("");
  }

  function deleteCategory(category) {

    if (
      !window.confirm(
        `Delete "${category}" category?`
      )
    ) {
      return;
    }

    setCategories(
      categories.filter(
        (item) => item !== category
      )
    );
  }

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Categories</h1>
          <p>
            Manage product categories.
          </p>
        </div>

      </div>

      <div className="admin-panel">

        <div className="category-add">

          <input
            type="text"
            placeholder="New category name"
            value={newCategory}
            onChange={(e) =>
              setNewCategory(e.target.value)
            }
          />

          <button
            className="admin-primary-button"
            onClick={addCategory}
          >
            + Add Category
          </button>

        </div>

        <div className="category-list">

          {categories.map((category, index) => (

            <div
              className="category-item"
              key={category}
            >

              <div>

                <span className="category-number">
                  {index + 1}
                </span>

                <strong>
                  {category}
                </strong>

              </div>

              <button
                className="delete-button"
                onClick={() =>
                  deleteCategory(category)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}