import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    // validation
    if (name.length === 0) {
      setError("Pease set a product name");
    } else if (price < 0) {
      setError("ERROR");
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    handleAddProduct(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="price" />
        <br />
        <input type="text" name="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {<p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ProductForm;
