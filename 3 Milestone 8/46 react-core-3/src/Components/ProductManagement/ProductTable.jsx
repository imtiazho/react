import React from "react";

const ProductTable = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>{products.length}</h1>
      <table>
        <thead>
          <tr>
            <th>NO: </th>
            <th>Product: </th>
            <th>Price: </th>
            <th>Quantity: </th>
            <th>Action: </th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    {/* <td></td> */}
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
