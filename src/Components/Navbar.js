import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ cart, searchTerm, setSearchTerm }) {
  return (
    <nav>

      <Link to="/" className="brand">
        MII Beauty
      </Link>

      <Link className="nav-btn" to="/makeup">
        Makeup
      </Link>

      <Link className="nav-btn" to="/skincare">
        Skin Care
      </Link>

      <Link className="nav-btn" to="/lips">
        Lips
      </Link>

      <Link className="nav-btn" to="/eyes">
        Eyes
      </Link>

      <Link className="nav-btn" to="/face">
        Face
      </Link>

      <Link className="nav-btn" to="/about">
        About Us
      </Link>

      <Link className="nav-btn" to="/contact">
        Contact
      </Link>

      {/* Search Bar */}
      <input
        type="text"
        className="nav-search"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Shopping Cart */}
      <span className="cart">
        <Link to="/cart">
          <i className="fa-solid fa-bag-shopping"></i>
          {cart.length}
        </Link>
      </span>

    </nav>
  );
}

export default Navbar;
