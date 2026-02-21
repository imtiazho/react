/* const age = 10;
localStorage.setItem("myAge", age);

console.log(localStorage.getItem("myAge")); */

/* const handleAddToStorage = () => {
  //   const name = "GIAS UDDIN";
  //   localStorage.setItem("Name", name);

  const person = {
    name: "Imtiaz Hossain",
    age: 10,
    friends: ["aa", "ss", "ff", "gg", "ee"],
  };

  localStorage.setItem("Person", JSON.stringify(person));
  
    // String back to object 
  const item = localStorage.getItem("Person");
  const converted  = JSON.parse(item);
  console.log(converted);
}; */

const handleAddtoCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("quantity");

  const name = productName.value;
  const quantity = productQuantity.value;

  displayProduct(name, quantity);
  handleSetToLocalStorage(name, quantity);
  productName.value = "";
  productQuantity.value = "";
};

const displayProduct = (productName, productQuantity) => {
  const productContainer = document.getElementById("productCon");
  const li = document.createElement("li");
  li.innerText = `${productName} : ${productQuantity}`;

  productContainer.append(li);
};

/* const handleSetToLocalStorage = (productName, productQuantity) => {
  const newPro = { productName: productQuantity };
  localStorage.setItem("Cart", JSON.stringify(newPro));
}; */

const getProFromLocalS = () => {
  let cart = {};
  const getProduct = localStorage.getItem("Cart");

  if (getProduct) {
    cart = JSON.parse(getProduct);
  }

  return cart;
};

const displayProductFromLocalS = () => {
    const products = getProFromLocalS();
    for(const product in products)
    {
        displayProduct(product, products[product]);
    }
}

// Detail Functionality
const handleSetToLocalStorage = (productName, productQuantity) => {
  const cart = getProFromLocalS();

  cart[productName] = productQuantity;
  localStorage.setItem("Cart", JSON.stringify(cart));
};
displayProductFromLocalS();
