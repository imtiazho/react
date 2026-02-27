import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";

const bottlePromise = fetch("./bottle.json").then((res) => res.json());

// const bottlePromiseTwo = fetch("https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/bottles.json").then(res => res.json())

function App() {
  // const waterBottles = [
  //   {
  //     id: 1,
  //     brand: "Hydro Flask",
  //     capacity: "32oz",
  //     material: "Stainless Steel",
  //     insulated: true,
  //     colors: ["Blue", "Black", "Stone"],
  //     price: 44.95,
  //   },
  //   {
  //     id: 2,
  //     brand: "Nalgene",
  //     capacity: "32oz",
  //     material: "Tritan Plastic",
  //     insulated: false,
  //     colors: ["Clear", "Trout Green", "Cosmo"],
  //     price: 16.99,
  //   },
  //   {
  //     id: 3,
  //     brand: "YETI",
  //     capacity: "26oz",
  //     material: "Stainless Steel",
  //     insulated: true,
  //     colors: ["Navy", "Seafoam", "White"],
  //     price: 40.0,
  //   },
  //   {
  //     id: 4,
  //     brand: "S'well",
  //     capacity: "17oz",
  //     material: "Stainless Steel",
  //     insulated: true,
  //     colors: ["Teakwood", "Moonstone"],
  //     price: 35.0,
  //   },
  //   {
  //     id: 5,
  //     brand: "CamelBak",
  //     capacity: "25oz",
  //     material: "BPA-Free Plastic",
  //     insulated: false,
  //     colors: ["Charcoal", "Cardinal"],
  //     price: 15.0,
  //   },
  // ];

  return (
    <>
      <Suspense fallback={<p>Bottle are loading...</p>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
