import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  // ✅ Cart state (initially with some dummy data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Smartphone", price: 19999, quantity: 1, img: "/assets/phone.jpg" },
    { id: 2, name: "Headphones", price: 2499, quantity: 2, img: "/assets/headphones.jpg" },
  ]);

  // ✅ Function to remove an item
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // ✅ Calculate total dynamically
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                <p>Quantity: {item.quantity}</p>

                {/* ✅ Remove Button */}
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Show total only if cart not empty */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
