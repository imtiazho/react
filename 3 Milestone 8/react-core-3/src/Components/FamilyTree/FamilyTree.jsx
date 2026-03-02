import React from "react";
import GrandPa from "./GrandPa";
import "./Fam.css";

const FamilyTree = () => {
  const special = "Diamond";

  return (
    <div className="famTree">
      FamilyTree
      <GrandPa></GrandPa>
    </div>
  );
};

export default FamilyTree;
