const API_BASE_URL = 'http://localhost:5000';

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

// Get cart items
export const getCart = async () => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    if (response.status === 401) {
      return { items: [], total: 0 }; // Return empty cart if not logged in
    }
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

// Add item to cart
export const addToCart = async (productId, quantity = 1) => {
  const response = await fetch(`${API_BASE_URL}/cart/add`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ productId, quantity }),
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Please login to add items to cart');
    }
    throw new Error('Failed to add to cart');
  }
  return response.json();
};

// Remove item from cart
export const removeFromCart = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to remove from cart');
  }
  return response.json();
};
