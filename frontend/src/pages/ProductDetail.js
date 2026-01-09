import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../api/productApi';
import { addToCart } from '../api/cartApi';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

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
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-stock">
            {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
          </p>
          <button 
            className="add-to-cart-btn" 
            onClick={async () => {
              try {
                await addToCart(product.id);
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 2000);
              } catch (err) {
                console.error('Error adding to cart:', err);
              }
            }}
          >
            {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
