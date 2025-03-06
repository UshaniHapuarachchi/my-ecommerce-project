import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

function Navbar() {
  const cartItems = useSelector(state => state.cart); 
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); 

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
        <Typography variant="h6" style={{ fontWeight: 700 }}>
  TechCart
</Typography>
        </Link>

        <Link to="/cart">
          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon className="cart-icon" />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
