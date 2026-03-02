import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      Dad
      <section>
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
