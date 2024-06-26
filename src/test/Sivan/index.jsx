import { useState } from "react";
import LineGraph from "../../components/LineGraph";
import PointsGraph from "../../components/PointsGraph";
import SensorCheckBox from "../../components/SensorCheckbox";
import useApi from '../../hooks/useApi'
import styles from "./style.module.css";
// import { data } from "./points";

const Sivan = ({generatorId='6678464e815884d6e23a4542', time ="day" ,sensor_type = "temperature"}) => {
  const [showPointsGraph, setShowPointsGraph] = useState(true);
  const [sensor, setSensor] = useState({
    ממוצע: false,
    "חיישן 1": true,
    "חיישן 2": false,
    "חיישן 3": false,
  });
const {data,loading,error} = useApi(`/generator/${generatorId}/data?time=${time}&sensor_type=${sensor_type}`)
  console.log(data);
 
  return (
    <div className={styles.chartContainer}>
      <div className={styles.canvasContainer}>
      <button onClick={toggleGraph}>
        {showPointsGraph ? <LineGraph data={data.filter((sens) => sensor[sens.name])} /> :
         <PointsGraph data={data.filter((sens) => sensor[sens.name])}/> }
      </button>
      {/* <div className={styles.graph1}>
      <LineGraph data={data.filter((sens) => sensor[sens.name])} />
      </div>
      <div className={styles.graph1}>
           <PointsGraph data={data.filter((sens) => sensor[sens.name])}/> 
      </div> */}
        
      </div>
    <SensorCheckBox sensor={sensor} setSensor={setSensor} />
    </div>
  );
};

export default Sivan;
