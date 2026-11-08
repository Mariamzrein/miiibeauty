import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout({ cart, setCart }) {

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    payment: ""
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
        e.preventDefault();
    if (cart.length === 0) {
      return;
    }
    setCart([]);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-box">
        <h1>Thank You!</h1>
        <h2>Your order has been placed successfully.</h2>
        <p>Thank you for shopping with MII Beauty!</p>
        <Link to="/">
          <button className="checkout-btn">
            Continue Shopping
          </button>
        </Link>

      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-box">

        <h2>Your cart is empty.</h2>

        <Link to="/">
          <button className="checkout-btn">
            Shop Now
          </button>
        </Link>

      </div>
    );
  }

  return (

    <div className="checkout-box">

      <h1>Checkout</h1>

      <h2>Personal Information</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={customer.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={customer.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={customer.phone}
          onChange={handleChange}
          pattern="[0-9+ ]{7,15}"
          title="Enter a valid phone number"
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={customer.country}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={customer.city}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Full Delivery Address"
          value={customer.address}
          onChange={handleChange}
          required
        />

        <select
          name="payment"
          value={customer.payment}
          onChange={handleChange}
          required
        >

          <option value="">Select Payment Method</option>

          <option value="Cash on Delivery">
            Cash on Delivery
          </option>

        </select>

        <div className="order-summary">

          <h3>Order Summary</h3>

          <p>Number of products: {cart.length}</p>

          <h3>Total: ${total.toFixed(2)}</h3>

        </div>

        <button type="submit" className="checkout-btn">
          Place Order
        </button>

      </form>

    </div>

  );
}

export default Checkout;