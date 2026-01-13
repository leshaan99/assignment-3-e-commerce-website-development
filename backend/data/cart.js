// In-memory cart storage - now stored per user
// In a real app, this would be stored in a database per user
const userCarts = {};

// Get cart for a specific user
const getCart = (userId) => {
  if (!userId) return [];
  if (!userCarts[userId]) {
    userCarts[userId] = [];
  }
  return userCarts[userId];
};

// Add item to user's cart
const addToCart = (userId, product, quantity = 1) => {
  if (!userId) return [];
  
  if (!userCarts[userId]) {
    userCarts[userId] = [];
  }
  
  const cart = userCarts[userId];
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

// Remove item from user's cart
const removeFromCart = (userId, productId) => {
  if (!userId || !userCarts[userId]) return [];
  
  userCarts[userId] = userCarts[userId].filter(item => item.id !== productId);
  return userCarts[userId];
};

// Clear user's cart
const clearCart = (userId) => {
  if (!userId) return [];
  userCarts[userId] = [];
  return userCarts[userId];
};

// Get cart total for a specific user
const getCartTotal = (userId) => {
  if (!userId || !userCarts[userId]) return 0;
  return userCarts[userId].reduce((total, item) => total + (item.price * item.quantity), 0);
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  getCartTotal
};
