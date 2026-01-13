const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const products = require('../data/products');
const { getCart, addToCart, removeFromCart, clearCart, getCartTotal } = require('../data/cart');

const JWT_SECRET = 'your-secret-key-change-in-production';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Please login.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// GET /cart - Get cart items (requires auth)
router.get('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const cart = getCart(userId);
  const total = getCartTotal(userId);
  res.json({ items: cart, total: total });
});

// POST /cart/add - Add item to cart (requires auth)
router.post('/add', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;
  
  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required' });
  }
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const cart = addToCart(userId, product, quantity || 1);
  const total = getCartTotal(userId);
  
  res.json({ message: 'Product added to cart', items: cart, total: total });
});

// DELETE /cart/:id - Remove item from cart (requires auth)
router.delete('/:id', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const productId = parseInt(req.params.id);
  const cart = removeFromCart(userId, productId);
  const total = getCartTotal(userId);
  
  res.json({ message: 'Product removed from cart', items: cart, total: total });
});

// DELETE /cart - Clear cart (requires auth)
router.delete('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  clearCart(userId);
  res.json({ message: 'Cart cleared', items: [], total: 0 });
});

module.exports = router;
