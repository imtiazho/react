import "./Shoe.css";

const Shoe = ({ eachShoe, handleCart }) => {
  const {
    id,
    name,
    brand,
    category,
    price,
    currency,
    sizes,
    colors,
    inStock,
    image,
  } = eachShoe;

  return (
    <div style={{}} className="card" id={`shoe-${id}`}>
      <img style={{ width: "200px" }} src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        Brand: {brand} | Category: {category}
      </p>

      <div className="price-tag">
        <span>
          {price} {currency}
        </span>
      </div>

      <div className="options">
        <p>Available Sizes: {sizes.join(", ")}</p>
        <p>Colors: {colors.join(", ")}</p>
      </div>

      <button onClick={() => handleCart(id)} disabled={!inStock}>
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default Shoe;
