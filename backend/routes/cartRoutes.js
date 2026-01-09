const express = require('express');
const router = express.Router();
const products = require('../data/products');
const { getCart, addToCart, removeFromCart, clearCart, getCartTotal } = require('../data/cart');

// GET /cart - Get cart items
router.get('/', (req, res) => {
  const cart = getCart();
  const total = getCartTotal();
  res.json({ items: cart, total: total });
});

// POST /cart/add - Add item to cart
router.post('/add', (req, res) => {
  const { productId, quantity } = req.body;
  
  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required' });
  }
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const cart = addToCart(product, quantity || 1);
  const total = getCartTotal();
  
  res.json({ message: 'Product added to cart', items: cart, total: total });
});

// DELETE /cart/:id - Remove item from cart
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const cart = removeFromCart(productId);
  const total = getCartTotal();
  
  res.json({ message: 'Product removed from cart', items: cart, total: total });
});

// DELETE /cart - Clear cart
router.delete('/', (req, res) => {
  clearCart();
  res.json({ message: 'Cart cleared', items: [], total: 0 });
});

module.exports = router;
