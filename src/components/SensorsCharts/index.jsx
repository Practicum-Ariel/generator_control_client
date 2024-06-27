import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import BoxSensorType from "../BoxSensorType";
import LineGraph from "../LineGraph";
import Loader from "../Loader";
import PointsGraph from "../PointsGraph";
import SensorCheckbox from "../SensorCheckbox";
import styles from "./style.module.css";
import SelectRange from "../selectRange";

const types = [
  { text: "טמפרטורה", value: "temperature" },
  { text: "ויברציה", value: "vibration" },
  { text: "קול", value: "sound" },
];

export default function SensorsCharts({
  generatorId = "6678464e815884d6e23a4542",
  
})  
{
  const [showPointsGraph, setShowPointsGraph] = useState(true);
  const [changegraph, setChangegraph] = useState(true);
  const [sensor, setSensor] = useState({});
  const [colors, setColors] = useState({});
  const [time,setTime] =useState("day");
  const [selected, setSelected] = useState("temperature");
  const { data, loading, error } = useApi(
    `/generator/6678464e815884d6e23a4542/data?time=${time}&sensor_type=${selected}`
  );
  
  const colorType = {t1:"red",t2:"purple",t3:"black",t4:"yellow"}

  useEffect(() => {
    if (!loading) {
      setSensor(
        data.reduce((acc, curr) => ({ ...acc, [curr.name]: true }), {})
      );
      setColors(
        data.reduce((acc, curr) => ({ ...acc, [curr.name]: colorType[curr.name] }), {})
      );
    }
  }, [loading]);
console.log("sensor",sensor);
  function timeform(isoString) {
    const date = new Date(isoString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return ` ${hour}:${minutes}:${seconds}`;
  }

  function dateform(isoString) {
    const date = new Date(isoString);
    return `${date.getDate()}/${
      date.getMonth() + 1
    } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  function handleChangeGraph() {
    setShowPointsGraph((prev) => !prev);
  }
  const formattedData = data
    ? data.map((dat) => ({
        ...dat,
        color: colors[dat.name],
        points: dat.points.map((p) => ({
          ...p,
          x:
            time === "day"
              ? timeform(p.x)
              : dateform(p.x),
        })),
      }))
    : [];


  return (
    <div className={styles.SensorsCharts}>
      <div className={styles.sensorType}> 
            <BoxSensorType
              setSelected={setSelected}
              selected={selected}
              types={types}
            />
      </div>
      <div className={styles.selctor}>
        <div className={styles.sensorBox}>
      <SensorCheckbox colorType={colorType}  sensor={sensor}  setSensor={setSensor} />
      </div>
      <SelectRange time={time} setTime={setTime}/>

      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className={styles.canvasContainer}>
          <button className={styles.changegraphbutton} onClick={handleChangeGraph}>
            Change Graph
          </button>
          <div className={styles.graph1}>
            {showPointsGraph ? (
              <PointsGraph
                data={formattedData.filter((sens) => sensor[sens.name])}
              />
            ) : (
              <LineGraph
                data={formattedData.filter((sens) => sensor[sens.name])}
              />
            )}
          </div>
          
          
        </div>
      )}
    </div>
  );
}
