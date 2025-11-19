import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import "./popup.css";

function ProductCard({ name, price, img, onAddToCart }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const goToCart = () => {
    setShowPopup(false);
    navigate("/cart");
  };

  return (
    <>
      <div className="product-card">
        <img src={img} alt={name} className="product-img" />
        <h3>{name}</h3>
        <p>{price}</p>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>

            <h2>Added to Cart!</h2>
            <p>{name} has been added successfully.</p>

            <button className="go-cart-btn" onClick={goToCart}>
              Go to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
