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
  const [isShortData, setIsShortData] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    setTempdata(data);
  }, [data]);
  const x = [
    {
      name: "ממוצע",
      points: [
        { x: "00:00", y: 76 },
        { x: "00:20", y: 39 },
        { x: "00:40", y: 71 },
        { x: "01:00", y: 53 },
        { x: "01:20", y: 8 },
        { x: "01:40", y: 25 },
        { x: "02:00", y: 89 },
        { x: "02:20", y: 18 },
        { x: "02:40", y: 77 },
      ],
    }]
  const handleManualZoomOut = () => {
    
    if (chartRef.current ) {
      try {
        chartRef.current.zoom(0.9); // Zoom in by 10%
      } catch (error) {
        console.error("Zoom In Error:", error);
      }
    } else {
      console.warn("Chart instance is not available for zooming in.");
    }
  };
  function handleManualZoomIn  ()  {
    // const chartInstance = chartRef.current;

    // if (chartInstance) {
    //   chartInstance.zoom(1.5); // Zoom in by 10%
    // }
    if (chartRef.current ) {
      try {
        chartRef.current.zoom(1.1); // Zoom in by 10%
      } catch (error) {
        console.error("Zoom In Error:", error);
      }
    } else {
      console.warn("Chart instance is not available for zooming in.");
    }
    // chartRef.current.zoom(0.5);
    // debugger;
    // if (chartRef.current) {
    //   chartRef.current.chartInstance.zoom(1.1); // Zoom in by 10%
    // }
  };

  const handleZoom = ({ chart }) => {

  if (isShortData ){
    setTempdata(x);
    const maxval = chart.scales.x.max;
    const minval = chart.scales.x.min;
    console.log("max,min",maxval,minval);
  }
  else{
    setTempdata(  data);
    const maxval = chart.scales.x.max;
    const minval = chart.scales.x.min;
    console.log("max,min",maxval,minval);
  }
  setIsShortData(!isShortData);
    // const maxval = chart.scales.x.max;
    // const minval = chart.scales.x.min;
    // const pointsInInterval = maxval - minval;

    // // יצירת נתונים ממוצעים לטווח הנוכחי של זום
    // const averagedData = generateAverageData(data, pointsInInterval);

    // setTempdata(isShortData ? data : averagedData);
    // setIsShortData(!isShortData);

    // console.log("Zoom range:", minval, maxval);
    // console.log("Updated data:", tempdata);
  };
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
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
          onZoom: handleZoom,
        },
        pan: {
          enabled: true,
          mode: 'x',
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
        min: 0, // Minimum value for y-axis
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
      <button onClick={handleResetZoom}>איפוס זום</button>
      <button onClick={handleManualZoomIn}>התקרבות</button>
      <button onClick={handleManualZoomOut}>התרחקות</button>
    </div>
  );
};

export default LineGraph;
