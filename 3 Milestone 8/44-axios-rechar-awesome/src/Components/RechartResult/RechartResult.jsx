import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const students = [
  {
    id: "st_01",
    name: "Alex Johnson",
    physics: 82,
    chemistry: 88,
    math: 95,
    total: 265,
  },
  {
    id: "st_02",
    name: "Beatrice Hall",
    physics: 75,
    chemistry: 72,
    math: 80,
    total: 227,
  },
  {
    id: "st_03",
    name: "Carlos Mendez",
    physics: 91,
    chemistry: 94,
    math: 88,
    total: 273,
  },
  {
    id: "st_04",
    name: "Diana Prince",
    physics: 64,
    chemistry: 68,
    math: 70,
    total: 202,
  },
  {
    id: "st_05",
    name: "Evan Wright",
    physics: 88,
    chemistry: 85,
    math: 92,
    total: 265,
  },
  {
    id: "st_06",
    name: "Fiona Chen",
    physics: 77,
    chemistry: 80,
    math: 75,
    total: 232,
  },
  {
    id: "st_07",
    name: "George Miller",
    physics: 95,
    chemistry: 92,
    math: 98,
    total: 285,
  },
  {
    id: "st_08",
    name: "Hannah Abbott",
    physics: 55,
    chemistry: 60,
    math: 58,
    total: 173,
  },
  {
    id: "st_09",
    name: "Isaac Foster",
    physics: 84,
    chemistry: 82,
    math: 86,
    total: 252,
  },
  {
    id: "st_10",
    name: "Julia Vane",
    physics: 70,
    chemistry: 75,
    math: 72,
    total: 217,
  },
];

const RechartResult = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={students}>
        <XAxis dataKey={`name`}/>
        <YAxis/>
        <Line dataKey="math"></Line>
        <Line stroke="red" dataKey={`chemistry`}></Line>
      </LineChart>
    </div>
  );
};

export default RechartResult;
