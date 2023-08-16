import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-left">
          <h2>Shoped</h2>
        </div>

        <div className="nav-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="sign-up">Sign Up</NavLink>
        </div>

        <div className="nav-right">
          <div className="search-input">
            <div className="search-icon">
              <i class="bi bi-search"></i>
            </div>
            <input type="search" placeholder="What are you looking for?" />
          </div>
          <div className="cart-icon">
            <i class="bi bi-cart3"></i>
            <div className="cart-count">
                <div>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
