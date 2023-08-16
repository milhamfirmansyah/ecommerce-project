import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import '../App.css'
import { useState, useRef } from 'react';

function Navbar() {
  const [isSearchIconVisible, setSearchIconVisible] = useState(true);
  const inputRef = useRef(null);

  const toggleSearchIcon = () => {
    setSearchIconVisible(false);
    inputRef.current.focus();
  };

  const handleInputBlur = () => {
    setSearchIconVisible(true);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-left">
          <h2>Shoped</h2>
        </div>

        <div className="nav-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>

        <div className="nav-right">
          <div className="search-input">
            <input type="search" placeholder="What are you looking for?" ref={inputRef} onBlur={handleInputBlur} />
            <div className="search-icon" onClick={toggleSearchIcon}>
              {isSearchIconVisible && <i className="bi bi-search"></i>}
            </div>
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
