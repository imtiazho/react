import React from "react";
import { useLoaderData } from "react-router";

const Bottles = () => {
  const {data} = useLoaderData();
    console.log(data);
  return <div>Bottles: {data.length}</div>;
};

export default Bottles;
