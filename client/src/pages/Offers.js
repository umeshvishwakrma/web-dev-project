import React from "react";
import "./Offers.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Offers() {
  const navigate = useNavigate();

  return (
    <div className="offers-page">
      <Header />

      <section className="offers-hero">
        <h1>🎉 Exclusive Offers Just for You!</h1>
        <p>Celebrate this festive season with our biggest discounts ever!</p>
        <button className="explore-btn" onClick={() => navigate("/")}>
          Shop Now 🛍️
        </button>
      </section>

      <section className="offer-cards">
        <div className="offer-card">
          <h2>👟 Footwear Bonanza</h2>
          <p>Flat <span>50% OFF</span> on top shoe brands.</p>
          <button onClick={() => navigate("/")}>View Collection</button>
        </div>

        <div className="offer-card">
          <h2>👗 Fashion Fiesta</h2>
          <p>Buy 1 Get 1 Free on Kurtis & Jeans!</p>
          <button onClick={() => navigate("/")}>Shop Now</button>
        </div>

        <div className="offer-card">
          <h2>🍎 Fresh Fruits & Veggies</h2>
          <p>Get up to <span>40% OFF</span> on organic groceries.</p>
          <button onClick={() => navigate("/")}>Grab Offer</button>
        </div>

        <div className="offer-card">
          <h2>💻 Electronics Mega Sale</h2>
          <p>Upto <span>60% OFF</span> on laptops, headphones & more.</p>
          <button onClick={() => navigate("/")}>Shop Deals</button>
        </div>
      </section>

      <footer className="offers-footer">
        <p>✨ Hurry up! Offers valid till New Year’s Eve ✨</p>
      </footer>
    </div>
  );
}

export default Offers;
