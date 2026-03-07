import React from "react";
import UpperPart from "../UpperPart/UpperPart";
import MiddlePart from "../MiddlePart/MiddlePart";
import DownMiddle from "../DownMiddle/DownMiddle";
import BottomPart from "../BottomPart/BottomPart";
import { useLoaderData } from "react-router";

const Content = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.map((eachData) => {
        return (
          <div key={eachData.id}>
            <UpperPart eachData={eachData}></UpperPart>
            <MiddlePart></MiddlePart>
            <DownMiddle></DownMiddle>
            <BottomPart></BottomPart>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
