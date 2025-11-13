import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, total } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Fake delay to simulate payment process
    setTimeout(() => {
      setOrderPlaced(true);
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-container success">
        <h1>🎉 Payment Successful!</h1>
        <p>Your order has been placed successfully.</p>
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="checkout-item">
                  <img src={item.img} alt={item.name} className="checkout-img" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      {item.quantity} × ₹{item.price} = ₹
                      {item.price * item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total Amount: ₹{total}</h3>
          </div>

          <div className="payment-section">
            <h2>Select Payment Method</h2>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI (Google Pay / PhonePe / Paytm)
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit / Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            {paymentMethod === "upi" && (
              <div className="mock-field">
                <label>Enter UPI ID:</label>
                <input type="text" placeholder="e.g., name@upi" />
              </div>
            )}
            {paymentMethod === "card" && (
              <div className="mock-field">
                <label>Card Number:</label>
                <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
                <label>Expiry Date:</label>
                <input type="text" placeholder="MM/YY" />
                <label>CVV:</label>
                <input type="password" placeholder="•••" />
              </div>
            )}

            <button className="confirm-btn" onClick={handlePayment}>
              Confirm Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
