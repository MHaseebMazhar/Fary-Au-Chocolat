import React from "react";
import "./CategoryNav.css";

export default function CategoryNav({ categories, selected, onSelect }) {
  return (
    <div className="category-nav">
      {categories.map((c) => (
        <button
          key={c}
          className={c === selected ? "active" : ""}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
