import React, { useContext } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
