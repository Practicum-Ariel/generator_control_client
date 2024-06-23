import { useState } from "react";
import LineGraph from "../../components/LineGraph";
import PointsGraph from "../../components/PointsGraph";
import SensorCheckBox from "../../components/SensorCheckbox";

import styles from "./style.module.css";

const Sivan = () => {
  const data = [
    {
      name: "ממוצע",
      points: [
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
        { x: 100, y: 20 },
      ],
    },
    {
      name: "חיישן 1",
      points: [
        { x: 25, y: 25 },
        { x: 30, y: 30 },
        { x: 40, y: 40 },
      ],
    },
    {
      name: "חיישן 2",
      points: [],
    },
    {
      name: "חיישן 3",
      points: [],
    },
  ];

  const [sensor, setSensor] = useState({
    ממוצע: false,
    "חיישן 1": false,
    "חיישן 2": false,
    "חיישן 3": false,
  });

  console.log(data);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.canvasContainer}>
        <LineGraph data={data.filter((sens) => sensor[sens.name])} />
        <PointsGraph />
      </div>
      <SensorCheckBox setSensor={setSensor} />
    </div>
  );
};

export default Sivan;
