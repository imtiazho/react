import React, { use, useEffect, useState } from "react";
import Btottle from "./Btottle/Btottle";
import {
  addToStoredCart,
  getStoredCart,
  removeItem,
} from "../../Utilities/localStorage/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlePromise }) => {
  const [cart, setCart] = useState([]);
  const bottle = use(bottlePromise);

  // Use effect
  useEffect(() => {
    const storedCartIds = getStoredCart();
    // console.log(storedCartIds);

    const storedCart = [];
    for (const id of storedCartIds) {
      const cartBottle = bottle.find((btl) => btl.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottle]);

  const handleAddToCart = (botol) => {
    // console.log("Bottle will be added to cart", botol);
    // const newCart = [...cart, botol];
    // setCart(newCart);

    // Save the bottle id to local Storage
    addToStoredCart(botol.id);
  };

  const removeFromCart = (id) => {
    const remaining = cart.filter((btl) => btl.id !== id);
    setCart(remaining);
    removeItem(id);
  };
  return (
    <div>
      <h3>Bottles: {bottle.length}</h3>
      <h3>Cart: {cart.length}</h3>
      <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
      {bottle.map((btl) => (
        <Btottle
          handleAddToCart={handleAddToCart}
          btl={btl}
          key={btl.id}
        ></Btottle>
      ))}
    </div>
  );
};

export default Bottles;
