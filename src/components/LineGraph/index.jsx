import React, { useEffect, useRef, useState } from "react";
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
import zoomPlugin from "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import everage from "./everage";
import { GrPowerReset } from "react-icons/gr";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const LineGraph = ({ data }) => {

  const [tempdata, setTempdata] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    setTempdata(everage({ data }))
  }, [data]);

  const handleManualZoomOut = () => {

    if (chartRef.current.getZoomLevel() == 1) {
      return setTempdata(everage({ data }))
    }
    if (chartRef.current) {
      try {
        chartRef.current.zoom(0.9); // Zoom in by 10%
      } catch (error) {
        console.error("Zoom In Error:", error);
      }
    } else {
      console.warn("Chart instance is not available for zooming in.");
    }
  };

  function handleManualZoomIn() {
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

  const handleResetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }

  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "חיישני טמפרטורה על ציר זמן",
      },
      legend: {
        display: false, // Hide the legend
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
        grid: {
          display: false,
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

  return (
    <div className={styles.chartContainer}>
      <Line ref={chartRef} data={formattedData} options={options} />
      <div className={styles.bottomButtons}>
        <button className={styles.resetButton} onClick={handleResetZoom}><GrPowerReset /></button>
        <button className={styles.plusButton} onClick={handleManualZoomIn}>+</button>
        <button className={styles.minusButton} onClick={handleManualZoomOut}>-</button>
      </div>
    </div>
  );
};

export default LineGraph;
