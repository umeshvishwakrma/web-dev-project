import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, img, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="add-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
