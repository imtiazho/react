const getLocalStorage = () => {
  const storedData = localStorage.getItem("Cart");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const setItemToLocalStorage = (cart) => {
  localStorage.setItem("Cart", JSON.stringify(cart));
};

const addItemToCart = (id) => {
  const cart = getLocalStorage();
  setItemToLocalStorage([...cart, id]);
};

const removeFromLocalStorage = (id) => {
    const storedData = getLocalStorage();
    const remaining = storedData.filter(eachItem => eachItem !== id);
    setItemToLocalStorage(remaining);
}

export { addItemToCart, getLocalStorage, removeFromLocalStorage };
