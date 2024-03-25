import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/services" className="nav-link">Our Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Enter tracking number" className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

export default Header;
