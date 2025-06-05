import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductDetail from '../components/ProductDetail';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  return <ProductDetail product={product} addToCart={addToCart} />;
};

export default ProductPage;
