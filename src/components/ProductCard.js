import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
    <img src={product.image} alt={product.title} width="100" />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`}><button>View Details</button></Link>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
