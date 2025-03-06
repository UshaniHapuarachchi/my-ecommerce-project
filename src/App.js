import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Navbar from './components/Navbar';
import OrderConfirmation from './components/OrderConfirmation';
import ProductList from './components/ProductList';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      
      <div style={{ marginTop: '0px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> 
                <ProductList /> 
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
