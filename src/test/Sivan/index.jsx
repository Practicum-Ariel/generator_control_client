import { useState } from "react";
import LineGraph from "../../components/LineGraph";
import PointsGraph from "../../components/PointsGraph";
import SensorCheckBox from "../../components/SensorCheckbox";

import styles from "./style.module.css";
import { data } from "./points";

const Sivan = () => {
  const [sensor, setSensor] = useState({
    ממוצע: false,
    "חיישן 1": true,
    "חיישן 2": false,
    "חיישן 3": false,
  });

  console.log(data.map((d) => d.name));

  return (
    <div className={styles.chartContainer}>
      <div className={styles.canvasContainer}>
        <LineGraph data={data.filter((sens) => sensor[sens.name])} />
        {/* <PointsGraph /> */}
        {/* <PointsGraph /> */}
      </div>
      <SensorCheckBox sensor={sensor} setSensor={setSensor} />
    </div>
  );
};

export default Sivan;
