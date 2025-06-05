import React, { useState } from 'react';

const CheckoutPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return <h2>Order placed successfully!</h2>;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" onChange={handleChange} required /><br />
      <textarea name="address" placeholder="Shipping Address" onChange={handleChange} required /><br />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutPage;
