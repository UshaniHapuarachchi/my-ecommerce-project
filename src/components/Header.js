import { Facebook, Instagram } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Shop the Latest<br />Tech Gadgets</h1>
        <Link to="/ProductList">
          <button className="shop-now-button">SHOP NOW</button>
        </Link>
    
        <div className="follow-us">
          <p>Follow Us</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ fontSize: 25, color: 'white', marginRight: '0px' }} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ fontSize: 25, color: 'white' }} />
            </a>
          </div>
        </div>
      </div>
      <img src="/images/img8.png" alt="" className="header-image" />
    </div>
  );
}

export default Header;
