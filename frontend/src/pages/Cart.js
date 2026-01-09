import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, removeFromCart } from '../api/cartApi';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching cart:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const data = await removeFromCart(productId);
      setCart(data);
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  if (loading) {
    return <div className="loading">Loading cart...</div>;
  }

  return (
    <div className="cart-page">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Continue Shopping
      </button>

      <h2>Your Shopping Cart</h2>

      {cart.items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/')} className="shop-btn">
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <p className="cart-item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button 
                    onClick={() => handleRemove(item.id)} 
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Total:</span>
              <span className="total-price">${cart.total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
