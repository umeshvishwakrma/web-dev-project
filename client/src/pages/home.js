import React, { useContext } from "react";
import "./Home.css";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import phoneImg from "../assets/phone.jpg";
import headphoneImg from "../assets/headphones.jpg";
import laptopImg from "../assets/laptop.jpg";
function Home() {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToCart = (p) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to cart");
      navigate("/login");
    } else {
      addToCart(p);
    }
  };
  const products = [
    { id: 1, name: "Smartphone", price: 19999, img: phoneImg },
    { id: 2, name: "Headphones", price: 2499, img:headphoneImg  },
    { id: 3, name: "Laptop", price: 69999, img:laptopImg },
  ];

  return (
    <div className="home">
        <Header/>
      <section className="hero">
        <div className="hero-content">
          <h1>Shop the Best Deals Today</h1>
          <p>Exclusive discounts on top brands. Limited time only!</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={`₹${p.price}`}
              img={p.img}
              onAddToCart={() =>handleAddToCart(p)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
