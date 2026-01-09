const API_BASE_URL = 'http://localhost:5000';

// Get cart items
export const getCart = async () => {
  const response = await fetch(`${API_BASE_URL}/cart`);
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

// Add item to cart
export const addToCart = async (productId, quantity = 1) => {
  const response = await fetch(`${API_BASE_URL}/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, quantity }),
  });
  if (!response.ok) {
    throw new Error('Failed to add to cart');
  }
  return response.json();
};

// Remove item from cart
export const removeFromCart = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to remove from cart');
  }
  return response.json();
};
