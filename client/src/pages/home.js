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
import airDopesImg from "../assets/AirDopes.jpeg";
import kettleImg from "../assets/ElectricKettle.jpg";
import hairDryerImg from "../assets/HairDryer.jpeg";
import waterbottleImg from "../assets/WaterBottle.jpeg";
import pencase from "../assets/PenCase.jpeg";
import mouse from "../assets/WirelessMouse.jpeg";
import bag from "../assets/Bag.jpeg";
import kurti from "../assets/Kurti.jpeg";
import jeans from "../assets/Jeans.jpeg";
import snacks from "../assets/Snacks.jpeg";
import fruits from "../assets/Fruits.jpeg";
import vegetables from "../assets/Vegetables.jpeg";
import shoes from "../assets/shoes.jpeg";
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
    { id: 4, name: "Air Dopes", price: 1499, img:airDopesImg  },
    { id: 5, name: "Electric Kettle", price: 1999, img:kettleImg  },
    { id: 6, name: "Hair Dryer", price: 1499, img:hairDryerImg  },
    { id: 7, name: "Water Bottle", price: 499, img:waterbottleImg  },
    { id: 8, name: "Pen Case", price: 299, img:pencase  },
    { id: 9, name: "Wireless Mouse", price: 799, img:mouse  },
    { id:10, name: "Bag", price: 999, img:bag  }, 
    {  id:11, name: "Kurti", price: 1299, img:kurti  },
    { id:12, name: "Jeans", price: 1599, img:jeans  },
    { id:13, name: "Snacks Pack", price: 399, img:snacks  },
    { id:14, name: "Fresh Fruits Box", price: 599, img:fruits  },
    { id:15, name: "Vegetables Pack", price: 499, img:vegetables  },
    { id:16, name: "Running Shoes", price: 2499, img:shoes  },
  ];

  return (
    <div className="home">
        <Header/>
        <section className="offer-banner">
  <h2>🎉 New Year & Christmas Mega Sale! 40% OFF on all items! 🎁</h2>
  <p>Limited time only — shop your favorites before the offer ends!</p>
</section>

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
