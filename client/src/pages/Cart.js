import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useContext(CartContext);
const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                {/* ✅ Quantity Controls */}
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    –
                  </button>
                  <span className="qty">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>
          <button className="checkout-btn" 
          onClick={() => navigate("/checkout")}
          >Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

