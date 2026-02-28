import { Suspense } from "react";
import CustomNav from "./Components/CustomNav/CustomNav";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import RechartResult from "./Components/RechartResult/RechartResult";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const pricingPromise = fetch("pricing.json").then((res) => res.json());
const marksPromise = axios.get("marks.json");

function App() {
  return (
    <>
      <header>
        <CustomNav></CustomNav>
        {/* <NavBar></NavBar> */}
      </header>

      <main>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <RechartResult></RechartResult>

        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
