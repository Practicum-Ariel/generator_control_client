import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './style.module.css';

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
  { x: 22, y: 20 },
  { x: 10, y: 40 },
  { x: 23, y: 61 },
  { x: 30, y: 80 },
  { x: 40, y: 100 },
  { x: 50, y: 80 },
  { x: 60, y: 60 },
  { x: 70, y: 40 },
  { x: 80, y: 20 },
  { x: 90, y: 0 },
  { x: 100, y: 20 }
];
const points2 = [
  { x: 25, y: 25 },
  { x: 30, y: 30 },
  { x: 40, y: 40 }
];
const points3 = [
  
];
const points4 = [
 
];
const options = {
  responsive: true,
  scales: {
    x: {
      type: 'linear',
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
    y: {
      type: 'linear',
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: 'Line Dataset',
      data: points,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
      fill: true,
      yAxisID: 'y',
    },
    {
      label: 'Line Dataset',
      data: points2,
      borderColor: 'rgb(125, 125, 192)',
      tension: 0.4,
      fill: true,
      yAxisID: 'y',
    },
    {
      label: 'Line Dataset',
      data: points2,
      borderColor: 'rgb(125, 125, 192)',
      tension: 0.4,
      fill: true,
      yAxisID: 'y',
    },{
      label: 'Line Dataset',
      data: points2,
      borderColor: 'rgb(125, 125, 192)',
      tension: 0.4,
      fill: true,
      yAxisID: 'y',
    }
  ],
};

const Sivan = () => {
  return (
    <div className={styles.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Sivan;
