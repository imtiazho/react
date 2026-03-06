import React, { use } from "react";
import {
  Area,
  Bar,
  BarChart,
  ComposedChart,
  Legend,
  Line,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const ReactChart = ({ marksDataPromise }) => {
  const data = use(marksDataPromise);

  const marksChartData = data.map((each) => {
    const student = {
      id: each.id,
      name: each.name,
      phyMark: each.marks.physics,
      cheMark: each.marks.chemistry,
      mathMark: each.marks.math,
      avg: each.marks.physics + each.marks.chemistry + each.marks.math,
    };

    return student;
  });

  return (
    <div>
      {/* Bar chart  */}
      {/* <BarChart width={500} height={300} data={marksChartData}>
        <XAxis key="name"></XAxis>
        <YAxis />

        <Tooltip />
        <Bar dataKey="avg" fill='red'></Bar>
        <Bar dataKey="cheMark" fill='blue'></Bar>
      </BarChart> */}

      {/* Composed Charts */}
      <ComposedChart width={800} height={500} data={marksChartData}>
        <XAxis dataKey="name" scale="band" />
        <YAxis width="auto" niceTicks="snap125" />

        <Tooltip />
        <Legend />

        <Area type="monotone" dataKey="avg" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="cheMark" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="phyMark" stroke="#ff7300" />
        <Scatter dataKey="mathMark" fill="red" />
        <RechartsDevtools />
      </ComposedChart>
    </div>
  );
};

export default ReactChart;
