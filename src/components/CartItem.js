import React from 'react';

const CartItem = ({ item, removeFromCart }) => (
  <div style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
    <img src={item.image} alt={item.title} width="50" />
    <strong>{item.title}</strong> - ${item.price}
    <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1rem' }}>Remove</button>
  </div>
);

export default CartItem;
