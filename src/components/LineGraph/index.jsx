import React from "react";
import styles from "./style.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      type: "linear",
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
    y: {
      type: "linear",
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

const LineGraph = ({ data }) => {
  console.log("LineGraph", data);

  const formattedData = {
    datasets: data.map((sens) => ({
      label: sens.name,
      data: sens.points,
      borderColor: sens.color,
      tension: 0.4,
      fill: true,
      yAxisID: "y",
    })),
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={formattedData} options={options} />
    </div>
  );
};

export default LineGraph;
