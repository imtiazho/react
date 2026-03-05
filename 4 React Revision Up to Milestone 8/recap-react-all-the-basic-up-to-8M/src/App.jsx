import { Suspense, useEffect, useState } from "react";
import User from "./Components/User/User";
import BottlesWithAsyncUSE from "./Components/BottlesWithAsyncUSE/BottlesWithAsyncUSE";
import LoadDataWithUseEffect from "./Components/LoadDataWithUseEffect/LoadDataWithUseEffect";
import Shoes from "./Components/Shoes/Shoes";
import Cart from "./Components/Cart/Cart";
import { addItemToCart, getLocalStorage, removeFromLocalStorage } from "./Utils/LocalStorage";

// const usersPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

const shoesPromise = fetch(
  "https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/data.json",
).then((res) => res.json());

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (id) => {
    if(!cart.includes(id))
    {
      setCart([...cart, id]);
      addItemToCart(id);
    }
  }

  useEffect(()=> {
    const storedCart = getLocalStorage();
    setCart(storedCart)
  }, [cart])

  const handleRemove = (id) => {
    setCart(cart.filter(id => id !== id));
    removeFromLocalStorage(id);
  }
  return (
    <>
      {/* All about data fetching  */}
      {/* <Suspense fallback={<h1>Loading Users...</h1>}>
        <User usersPromise={usersPromise}></User>
      </Suspense> */}
      {/* <BottlesWithAsyncUSE></BottlesWithAsyncUSE> */}
      {/* <LoadDataWithUseEffect></LoadDataWithUseEffect> */}

      <h1>Imtiaz Shoes House</h1>
      <Cart handleRemove={handleRemove} cart={cart}></Cart>

      <Suspense fallback={<h1>Loading shoes data...</h1>}>
        <Shoes handleCart={handleCart} shoesPromise={shoesPromise}></Shoes>
      </Suspense>
    </>
  );
}

export default App;
