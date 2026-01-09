// In-memory cart storage
// In a real app, this would be stored in a database per user
let cart = [];

// Get all cart items
const getCart = () => {
  return cart;
};

// Add item to cart
const addToCart = (product, quantity = 1) => {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  return cart;
};

// Remove item from cart
const removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
  return cart;
};

// Clear entire cart
const clearCart = () => {
  cart = [];
  return cart;
};

// Get cart total
const getCartTotal = () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  getCartTotal
};
