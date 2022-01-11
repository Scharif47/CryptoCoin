import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  const dataset = chartData.prices;

  const labels = dataset.map((arr) => new Date(arr[0]).toISOString().slice(0, 10));


  const prices = dataset.map((arr) => Number(arr[1].toFixed(2)));

  console.log(labels);

  const data = {
    labels,
    dataSets: [
      {
        data: prices,
        label: "Chart",
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
    },
  };

  return (
    <section className="h-[30rem]">
      <Line
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: [
            {
              label: "Chart USD Price",
              data: prices,
            },
          ],
        }}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false, responsive: true }}
      />
    </section>
  );
}

export default LineChart;
