import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">
         <img src="/logo.jpg" alt="Company Logo" className="company-logo" />
      </div>


      <nav className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/cart" className="nav-btn">Cart</Link>
        <Link to="/login" className="nav-btn">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
