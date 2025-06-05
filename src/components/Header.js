import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link> | 
      <Link to="/cart" style={{ marginLeft: '1rem' }}>Cart ({cart.length})</Link>
    </header>
  );
};

export default Header;
