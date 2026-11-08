import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart({ cart }) {

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div className="cart-box">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <table className="cart-table">

          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>

            {cart.map((item, index) => (

              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

      <p className="cart-total">
        Total: ${total.toFixed(2)}
      </p>

      <Link to="/">
        <button className="cart-btn-home">
          Continue Shopping
        </button>
      </Link>

      <button
        className="cart-btn"
        onClick={() => navigate("/checkout")}
        disabled={cart.length === 0}
      >
        Checkout
      </button>

    </div>

  );
}

export default Cart;