import React from 'react';

const ProductDetail = ({ product, addToCart }) => (
  <div style={{ padding: '2rem' }}>
    <img src={product.image} alt={product.title} width="150" />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p><strong>${product.price}</strong></p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductDetail;
