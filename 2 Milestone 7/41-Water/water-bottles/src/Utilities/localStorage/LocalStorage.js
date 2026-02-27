const getLocalStorage = () => {
  const StoredCartString = localStorage.getItem("Cart");
  if (StoredCartString) {
    const storedCart = JSON.parse(StoredCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartToStringified = JSON.stringify(cart);
  localStorage.setItem("Cart", cartToStringified);
};

const addItemCartToLocalStorage = (id) => {
  const cart = getLocalStorage();
  const newCart = [...cart, id];
  //   cart.push(id); // Anternative way

  // Save new Cart to local storage
  saveCartToLocalStorage(newCart);
};

export {
  getLocalStorage as getStoredCart,
  addItemCartToLocalStorage as addToStoredCart,
};
