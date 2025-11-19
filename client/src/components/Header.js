import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
function Header({ toggleTheme }) {
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
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
        <h1 className="brand-name">‎ Valdivian</h1>
      </div>
      <div className="flag-section">
  🇮🇳 <span className="country-label">India</span>
</div>


      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/offers" className="nav-btn">Offers 🎁</Link>
        <Link to="/cart" className="nav-btn">
          🛒 Cart (<span className="cart-count">{cartItems.length}</span>)
        </Link>
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

        {user? (
            <>
            <span className="nav-btn1"> 👤 {user.username}</span>
            <button onClick={logout} className="nav-btn2">Logout</button>
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
