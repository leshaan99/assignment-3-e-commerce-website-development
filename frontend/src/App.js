import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from './store/cartSlice';
import { logout } from './store/authSlice';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';

function AppContent() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>E-Commerce Store</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/cart" className="cart-link">
            🛒 Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </Link>
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hi, {user.name}</span>
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
