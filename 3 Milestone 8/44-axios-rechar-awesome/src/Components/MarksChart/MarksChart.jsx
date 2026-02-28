import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksData = use(marksPromise);
  const marks = marksData.data;

  // Data processing for the chart
  const marksChartData = marks.map((each) => {
    const student = {
      id: each.id,
      name: each.name,
      phyMark: each.marks.physics,
      cheMark: each.marks.chemistry,
      mathMark: each.marks.math,
      avg : each.marks.physics + each.marks.chemistry + each.marks.math,
    };

    return student;
  });

  console.log(marksChartData);
  return (
    <div>
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis key="name"></XAxis>
        <YAxis />

        <Tooltip />
        <Bar dataKey="avg" fill='red'></Bar>
        <Bar dataKey="cheMark" fill='blue'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
