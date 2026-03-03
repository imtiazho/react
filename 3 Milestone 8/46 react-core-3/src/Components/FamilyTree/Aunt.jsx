import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      Aunt
      <section>
        <Cousin name="Tom"></Cousin>
        <Cousin name="Jerry"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
