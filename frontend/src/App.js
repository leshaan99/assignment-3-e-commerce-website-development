import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1>E-Commerce Store</h1>
          </Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
