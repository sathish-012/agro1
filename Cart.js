import React from "react";

const Cart = ({ cartItems, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div>{item.name}</div>
                <div>₹{item.price}</div>
                <div>
                  <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                </div>
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <strong>Total: ₹{getTotalPrice()}</strong>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
