import React from "react";

const Cart = ({ cart, handleRemove }) => {
    
  return (
    <div>
      Cart: {cart.length}
      {
        cart.map(eachItem => <button onClick={() => handleRemove(eachItem)}>Remove: {eachItem}</button>)
      }
    </div>
  );
};

export default Cart;
