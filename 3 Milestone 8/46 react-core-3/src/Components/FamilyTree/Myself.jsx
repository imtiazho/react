import React from "react";
import Special from "./Special";

const Myself = ({special}) => {
  return (
    <div>
      Myself
      <section>
        <Special special={special}></Special>
      </section>
    </div>
  );
};

export default Myself;
