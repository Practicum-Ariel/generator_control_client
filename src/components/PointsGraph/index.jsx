import styles from "./style.module.css";
import React from "react";
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
import { Scatter } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const points = [
  { x: 0, y: 242 },
  { x: 10, y: 940 },
  { x: 20, y: 604 },
  { x: 31, y: 456 },
  { x: 40, y: 78 },
  { x: 50, y: 321 },
  { x: 60, y: 890 },
  { x: 70, y: 456 },
  { x: 87, y: 123 },
  { x: 90, y: 654 },
  { x: 100, y: 234 },
  { x: 110, y: 567 },
  { x: 120, y: 432 },
  { x: 130, y: 678 },
  { x: 140, y: 543 },
  { x: 150, y: 987 },
  { x: 160, y: 789 },
  { x: 170, y: 567 },
  { x: 180, y: 234 },
  { x: 190, y: 345 },
];


export default function PointsGraph({ data }) {
  console.log("datadat", data);
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: 'חריגות טמפטורה', // Set your title here
      },
    },
    scales: {
      x: {
        type: "category",
        position: "bottom",
        grid: {
          display: false,
        },
        title: {
          display: false, // Hide the x-axis title
        },
      },
      y: {
        type: "linear",
        display: true,
        grid: {
          display: false,
        },
        position: "left",
        title: {
          display: false, // Hide the y-axis title
        },
      },
    },
  };
  const graph = {
    datasets: [
      {
        data: points,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
    ],
  };
  const formattedData = {
    datasets: data.map((sens) => ({
      data: sens.points,
      borderColor: sens.color,
      borderWidth: 2, // Thin lines
      pointRadius: 4, // Hide points
      tension: 0.4,
      fill: true,
      yAxisID: "y",
    })),
  };
  return <Scatter options={options} data={formattedData} />;
}
