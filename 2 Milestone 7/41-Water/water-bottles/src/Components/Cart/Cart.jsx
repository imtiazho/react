import React from "react";

const Cart = ({removeFromCart, cart }) => {
  return (
    <div>
      {cart.map((bottle) => (
        <div>
          <h3>{bottle.brand}</h3>
          <button onClick={() => removeFromCart(bottle.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
