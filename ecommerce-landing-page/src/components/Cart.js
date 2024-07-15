import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - R{item.price} {/* Change $ to R */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;