import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, clearCart } from './store/cartSlice';
import { logout } from './store/authSlice';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';

function AppContent() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.auth);
  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  // Fetch cart when user logs in (token changes)
  useEffect(() => {
    if (token) {
      dispatch(fetchCart());
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart()); // Clear cart from UI on logout
  };

  return (
    <div className="App">
      <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>iPhone Hub</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/cart" className="cart-link">
            🛒 Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </Link>
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hi, {user.name.split(' ')[0]}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>iPhone Hub</h4>
            <p>Your trusted destination for the latest iPhones. Discover cutting-edge technology, exceptional quality, and unbeatable prices on all iPhone models from the newest releases to timeless classics.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Leshan Sanjeewa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
