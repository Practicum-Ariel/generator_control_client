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
  plugins: {
    title: {
      display: true,
      text: 'חיישני טמפרטורה על ציר זמן',
    },
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    x: {
      type: "linear",
      // labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      grid: {
        display: false,
      },
      // ticks: {
      //   stepSize: 1,
      //   font: {
      //     size: 12,
      //   },
      // },
      min: 0,
      max: 100,
      ticks: {
        stepSize: 1,
      },
    },
    y: {
      type: "linear",
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
      },
      grid: {
        display: false,
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
      borderWidth: 2, // Thin lines
      pointRadius: 4, // Hide points
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
