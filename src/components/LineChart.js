import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, coinData }) {
  const dataset = chartData.prices;

  const labels = dataset.map((arr) =>
    new Date(arr[0]).toISOString().slice(0, 10)
  );

  const prices = dataset.map((arr) => Number(arr[1].toFixed(2)));

  /* const coinChartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "rgba(125,0,195, 0.1");
    gradient.addColorStop(0.5, "rgba(125,0,195, 0.3");
    gradient.addColorStop(1, "rgba(125,0,195, 0.4");

    return {
      labels: labels,
      datasets: [
        {
          label: "Chart USD Price",
          data: prices,
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: gradient,
        },
      ],
    };
  }; */

  /*   const data = {
    datasets: [
      {
        label: "Chart USD Price",
        data: [
          dataset.map((arr) => ({
            x: new Date(arr[0]).toISOString().slice(0, 10),
            y: Number(arr[1].toFixed(2)),
          })),
        ],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(200, 0, 50, 0.7)",
      },
    ],
  }; */

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  };

  const coinChartData = {
    labels: labels,
    datasets: [
      {
        label: "USD Price",
        data: prices,
        fill: true,
        borderColor:
          coinData.market_data.price_change_percentage_24h > 0
            ? "rgba(0, 200, 50, 0.9)"
            : "rgba(200, 0, 50, 0.9)",
        backgroundColor:
          coinData.market_data.price_change_percentage_24h > 0
            ? "rgba(0, 200, 50, 0.6)"
            : "rgba(200, 0, 50, 0.6)",
      },
    ],
  };

  return (
    <section className="h-[30rem]">
      <Line
        datasetIdKey="id"
        data={coinChartData}
        width={100}
        height={50}
        options={options}
      />
    </section>
  );
}

export default LineChart;
