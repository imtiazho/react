import React from "react";
import "./bottle.css";

const Btottle = ({ btl, handleAddToCart }) => {

    return (
    <div className="card">
      Name: {btl.brand}
      <p>Capacity: {btl.capacity}</p>
      <button onClick={() =>handleAddToCart(btl)}>Buy Now</button>
    </div>
  );
};

export default Btottle;
