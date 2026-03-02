import React from "react";

const ProductForm = () => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity,
    };
    
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
    </div>
  );
};

export default ProductForm;
