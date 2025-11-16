import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../context/CartContext";

function Header({ toggleTheme }) {
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username) setUser(data); // <-- setting user data
      })
      .catch((err) => console.log(err));
  }, []);
  const usr = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // refresh header instantly
  };
    
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.jpg" alt="Company Logo" className="company-logo" />
        </Link>
        <h1 className="brand-name">Valdivian.in</h1>
      </div>
      <div className="flag-section">
  🇮🇳 <span className="country-label">India</span>
</div>


      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/offers" className="nav-btn">Offers 🎁</Link>
        <Link to="/wishlist" className="nav-btn">Wishlist ❤️</Link>
        <Link to="/about" className="nav-btn">About</Link>
      </nav>
      

      {/* Search + Cart + Theme */}
      <div className="header-right">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>

        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-count">{cartItems.length}</span>
        </Link>
        {usr? (
            <>
            <span className="nav-btn1"> 👤 {usr?.username}</span>
            <button onClick={handleLogout} className="nav-btn2">Logout</button>
            </>
        ) : (
            <Link to="/login" className="nav-btn1">Login</Link>
        )}
        {toggleTheme && (
          <button onClick={toggleTheme} className="theme-btn">🌗</button>
        )}
      </div>
    </header>
  );
}

export default Header;
