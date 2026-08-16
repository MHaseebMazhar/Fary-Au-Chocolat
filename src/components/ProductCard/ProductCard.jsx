import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAdd, onQuickOpen }) {
  return (
    <div className="product-card">
      <div className="product-card-top">
        <div className="thumb-wrap">
          {product.image ? (
            <img className="thumb" src={product.image} alt={product.name} />
          ) : (
            <div className="thumb" aria-hidden />
          )}
          <button
            className="quick-add"
            aria-label={`Quick add ${product.name}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onQuickOpen) onQuickOpen(product);
            }}
          >
            +
          </button>
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="desc">{product.desc}</p>
        </div>
      </div>

      <div className="product-card-bottom">
        <p className="price">PKR {product.price}</p>
        <button onClick={onAdd} className="primary">
          Add to cart
        </button>
      </div>
    </div>
  );
}
