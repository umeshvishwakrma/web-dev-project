import React from "react";
import "./About.css";
import Header from "../components/Header";

function About() {
  return (
    <div className="about-page">
      <Header />

      <section className="about-hero">
        <h1>About Us</h1>
        <p>Discover our story, our mission, and what makes us unique.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>Valdivian</strong> — your one-stop online shopping destination!  
            We bring you high-quality products across categories like electronics, fashion,  
            home essentials, and more — all at unbeatable prices.
          </p>
          <p>
            Founded in 2024, our goal is to make online shopping in India smoother,  
            faster, and more rewarding for everyone.  
            From cutting-edge gadgets to trendy apparel, we handpick every item  
            to ensure great quality and affordability.
          </p>

          <h2>Our Mission</h2>
          <p>
            We aim to deliver happiness to every doorstep by combining technology  
            with convenience. Our mission is to provide an easy, secure, and enjoyable  
            shopping experience that saves time and money.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>🛍️ 1000+ top-rated products</li>
            <li>⚡ Fast & reliable delivery</li>
            <li>💳 Secure payment options</li>
            <li>💬 Friendly 24/7 customer support</li>
            <li>🎁 Exciting offers & festive discounts</li>
          </ul>
        </div>
      </section>

      <footer className="about-footer">
        <p>Made with ❤️ in India 🇮🇳 | © {new Date().getFullYear()} Valdivian</p>
      </footer>
    </div>
  );
}

export default About;
