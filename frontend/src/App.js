import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from './store/cartSlice';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function AppContent() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>E-Commerce Store</h1>
        </Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart {cartItemCount > 0 && `(${cartItemCount})`}
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
