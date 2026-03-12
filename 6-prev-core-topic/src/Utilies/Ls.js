const getStoredData = () => {
  const storedData = localStorage.getItem("Taka");
  if (storedData) {
    return JSON.parse(storedData);
  }

  return 0;
};

const setItem = (amount) => {
    localStorage.setItem("Taka", JSON.stringify(amount))
}

const minusFromLocalS = () => {
    const storedData = localStorage.getItem("Taka");
    localStorage.setItem("Taka", JSON.stringify(storedData - 10));
}

export { getStoredData, setItem, minusFromLocalS };
