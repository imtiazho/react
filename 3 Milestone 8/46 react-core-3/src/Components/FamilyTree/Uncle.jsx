import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      Uncle
      <section>
        <Cousin name="Bijoy"></Cousin>
        <Cousin name="Joy"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
