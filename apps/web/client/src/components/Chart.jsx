import { data } from "autoprefixer";
import React from "react";
import Chart from "react-apexcharts";
const ReactChart = () => {
  const state = {
    options: {
      chart: {
        id: "basic-area",
        zoom: {
          enabled: false,
        },
        grid: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },

    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <div className="w-full">
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width={500}
        height={320}
      />
    </div>
  );
};

export default ReactChart;
