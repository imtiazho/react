import React from "react";
import ReactApexChart from "react-apexcharts";

const StackAreaChart = ({ performanceData }) => {
  const categories = performanceData.chart_data.map((item) => item.period);

  const series = [
    {
      name: "Avg. Exam Score",
      data: performanceData.chart_data.map((item) => item.avg_exam_score),
    },
    {
      name: "Avg. Attendance",
      data: performanceData.chart_data.map((item) => item.avg_attendance),
    },
    {
      name: "Absent",
      data: performanceData.chart_data.map((item) => item.absent),
    }
  ];
  
  const options = {
    chart: {
      type: "area",
      height: 350,
      stacked: false,
      toolbar: { show: false },
    },
    colors: ["#3D5EE1", "#70CFD7", "#FF4560"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    markers: {
      size: 5,
      colors: ["#3D5EE1", "#70CFD7", "#FF4560"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 7 },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  return (
    <div className="bg-white p-6 rounded">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default StackAreaChart;