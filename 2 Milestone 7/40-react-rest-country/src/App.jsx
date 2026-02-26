import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

// vigorous-stamp.surge.sh

const countrirsPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Countries countrirsPromise={countrirsPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
