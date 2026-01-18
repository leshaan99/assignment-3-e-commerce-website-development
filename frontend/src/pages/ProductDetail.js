import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../api/productApi';
import { addItemToCart } from '../store/cartSlice';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { error: cartError } = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Product not found.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      setMessage('Please login to add items to cart');
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    
    const result = await dispatch(addItemToCart(product._id));
    if (result.meta.requestStatus === 'fulfilled') {
      setAddedToCart(true);
      setMessage(null);
      setTimeout(() => setAddedToCart(false), 2000);
    } else {
      setMessage(result.payload || 'Failed to add to cart');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error">{error}</p>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to Products
      </button>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <span className="product-category-tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          
          {product.specs && (
            <div className="product-specs">
              <h3>Technical Specifications</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Display</span>
                  <span className="spec-value">{product.specs.display}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Chip</span>
                  <span className="spec-value">{product.specs.chip}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Camera</span>
                  <span className="spec-value">{product.specs.camera}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Front Camera</span>
                  <span className="spec-value">{product.specs.frontCamera}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Battery</span>
                  <span className="spec-value">{product.specs.battery}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Storage</span>
                  <span className="spec-value">{product.specs.storage}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Colors</span>
                  <span className="spec-value">{product.specs.colors}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Features</span>
                  <span className="spec-value">{product.specs.features}</span>
                </div>
              </div>
            </div>
          )}
          
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-stock">
            {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
          </p>
          {message && <p className="cart-message">{message}</p>}
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
