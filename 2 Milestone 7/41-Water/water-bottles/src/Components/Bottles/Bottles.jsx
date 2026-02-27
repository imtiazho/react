import React, { use, useState } from "react";
import Btottle from "./Btottle/Btottle";

const Bottles = ({ bottlePromise }) => {
  const [cart, setCart] = useState([]);
  const bottle = use(bottlePromise);

  const handleAddToCart = (botol) => {
    // console.log("Bottle will be added to cart", botol);
    const newCart = [...cart, botol];
    setCart(newCart);
  };

  return (
    <div>
      <h3>Bottles: {bottle.length}</h3>
      <h3>Cart: {cart.length}</h3>
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
