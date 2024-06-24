import styles from './style.module.css';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Scatter Chart',
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
    },
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

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

export const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: points,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export default function PointsGraph() {
  return (
    <Scatter options={options} data={data} />
  );
}