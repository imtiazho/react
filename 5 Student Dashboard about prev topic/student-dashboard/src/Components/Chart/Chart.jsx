import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ eachData }) => {
  const series = [
    eachData.present,
    eachData.absent,
    eachData.half_day,
    eachData.late,
  ];

  const [options] = React.useState({
    chart: {
      type: "donut",
    },
    labels: ["Present", "Absent", "Half Day", "Late"],
    colors: ["#22c55e", "#ef4444", "#3b82f6", "#facc15"],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: "bottom" },
        },
      },
    ],
  });

  return (
    <div className="p-6">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width="100%"
      />
    </div>
  );
};

export default Chart;
