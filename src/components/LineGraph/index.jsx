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

let numlabel = 72; // need to get from the server: day,month

const LineGraph = ({ data }) => {
  const [tempdata, setTempdata] = useState([]);
  const [min, setMax] = useState(0);
  const [max, setMin] = useState(Math.max());

  const chartRef = useRef(null);

  useEffect(() => {
    console.log("j");
    setTempdata(everage({ data }));
    // everage(data) //want here to made evg
  }, [data.length]);

  const handleZoom = async ({ chart }) => {
    const g = chart.scales.x;
    console.log(g);
    const maxval = chart.scales.x.max;
    const minval = chart.scales.x.min;

    console.log("ll", chart.scales.x.max);
  };
  // function  handleZoom ({chart}) {
  //   // const {min,max} = chart.scales.x;
  //   console.log("ll",chart.scales.x);
  //       const maxval = chart.scales.x.max
  //       const minval = chart.scales.x.min
  //       if (minval > min && maxval< max){
  //           //bring the points between minval && maxval
  //       } else{
  //         //data
  //         everage()
  //       }
  //       setMax(maxval)
  //       setMin(minval)

  //    const {min,max} = chart.scales.x;
  //   //  console.log("min,max",min,max);
  // }
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

          onxxZxoom: handleZoom,
          // limits: {
          //   x: { min: 0, max: data[0].points[data[0].points.length - 1].x },
          // },
        },
      },
    },
    scales: {
      x: {
        type: "category",
        labels: tempdata.length > 0 && tempdata[0].points.map((d) => d.x),

        grid: {
          display: false,
        },
        // min: 0,
        // max: 20,
        // ticks: {
        //   stepSize: 1,
        // },
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

  const handleResetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
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
      <button onClick={handleResetZoom}>Reset Zoom</button>
    </div>
  );
};

export default LineGraph;
