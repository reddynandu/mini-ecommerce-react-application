import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/checkout"><button>Proceed to Checkout</button></Link>
    </div>
  );
};

export default CartPage;
