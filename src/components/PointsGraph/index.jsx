import styles from "./style.module.css";
import React, { useEffect, useRef, useState } from "react";

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
import { GrPowerReset } from "react-icons/gr";
import everage from "../LineGraph/everage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function PointsGraph({ data }) {
  const chartRef = useRef(null);
  const [tempdata, setTempdata] = useState([]);

  useEffect(() => {
    setTempdata(everage({ data }))
  }, [data]);
  const handleResetZoom = () => {
    
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }

  };
  const handleManualZoomOut = () => {
    console.log(chartRef.current.getZoomLevel());
    if (chartRef.current.getZoomLevel() <= 1) {
      return setTempdata(everage({ data }))
    }
    if (chartRef.current) {
      try {
        chartRef.current.zoom(0.9);
      } catch (error) {
        console.error("Zoom In Error:", error);
      }
    } else {
      console.warn("Chart instance is not available for zooming in.");
    }
  };

  function handleManualZoomIn() {
    console.log(chartRef.current.getZoomLevel());
    if (chartRef.current.getZoomLevel() == 1) {
      setTempdata(data);
    }

    setTempdata(data);

    if (chartRef.current) {
      try {
        chartRef.current.zoom(1.1); // Zoom in by 10%
      } catch (error) {
        console.error("Zoom In Error:", error);
      }
    } else {
      console.warn("Chart instance is not available for zooming in.");
    }
  }
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'חריגות טמפטורה',
      },
      zoom: {
        zoom: {
          mode: "x",
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
    },
    scales: {
      x: {
        type: "category",
        labels: tempdata.length > 0 ? tempdata[0].points.map((d) => d.x) : [],
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

  const formattedData = {
    datasets: tempdata.map((sens) => ({
      data: sens.points,
      borderColor: sens.color,
      borderWidth: 2, // Thin lines
      pointRadius: 4, // Hide points
      tension: 0.4,
      fill: true,
      yAxisID: "y",
    })),
  };
  return <div className={styles.chartContainer}>
    <Scatter ref={chartRef} options={options} data={formattedData} />
    <div className={styles.bottomButtons}>
      <button className={styles.resetButton} onClick={handleResetZoom}><GrPowerReset /></button>
      <button className={styles.plusButton} onClick={handleManualZoomIn}>+</button>
      <button className={styles.minusButton} onClick={handleManualZoomOut}>-</button>
    </div>
  </div>
}
