import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import BoxSensorType from "../BoxSensorType";
import LineGraph from "../LineGraph";
import Loader from "../Loader";
import PointsGraph from "../PointsGraph";
import SensorCheckbox from "../SensorCheckbox";
import styles from "./style.module.css";

const types = [
  { text: "טמפרטורה", value: "temperature" },
  { text: "ויברציה", value: "vibration" },
  { text: "קול", value: "sound" },
];

export default function SensorsCharts({
  generatorId = "6678464e815884d6e23a4542",
  time = "jusa",
  sensor_type = "temperature",
}) {
  const [selected, setSelected] = useState("temperature");
  const { data, loading, error } = useApi(
    `/generator/6678464e815884d6e23a4542/data?time=day&sensor_type=${selected}`
  );
  function gettimeFromISOString(isoString) {
    const date = new Date(isoString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return ` ${hour}:${minutes}:${seconds}`;
  }

  function getDateTimeFromISOString(isoString) {
    const date = new Date(isoString);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  const formattedData = data
    ? data.map((dat) => ({
        ...dat,
        color: "red",
        points: dat.points.map((p) => ({
          ...p,
          x:
            time === "יום"
              ? gettimeFromISOString(p.x)
              : getDateTimeFromISOString(p.x),
        })),
      }))
    : [];

  // console.log("formatedData",formattedData);
  const [showPointsGraph, setShowPointsGraph] = useState(true);
  const [changegraph, setChangegraph] = useState(true);
  const [sensor, setSensor] = useState({});
  const [colors, setColors] = useState({});

  useEffect(() => {
    if (!loading) {
      setSensor(
        data.reduce((acc, curr) => ({ ...acc, [curr.name]: true }), {})
      );
      setColors(
        data.reduce((acc, curr) => ({ ...acc, [curr.name]: true }), {})
      );
    }
  }, [loading]);

  function handelchangegraph() {
    setChangegraph((prev) => !prev);
  }

  function handleChangeGraph() {
    setShowPointsGraph((prev) => !prev);
  }
  return (
    <div className={styles.SensorsCharts}>
      <BoxSensorType
        setSelected={setSelected}
        selected={selected}
        types={types}
      />
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
          {/* <button onClick={handelchangegraph}>
        change graph
        {showPointsGraph ? <LineGraph data={data.filter((sens) => sensor[sens.name])} /> :
         <PointsGraph data={data.filter((sens) => sensor[sens.name])}/> }
         </button>  */}
          {/* <div className={styles.graph1}>
            <LineGraph data={formattedData.filter((sens) => sensor[sens.name])} />
          </div> */}
          {/* <div className={styles.graph1}>
            <PointsGraph data={formattedData.filter((sens) => sensor[sens.name])} />
          </div> */}
          <SensorCheckbox sensor={sensor}  setSensor={setSensor} />
        </div>
      )}
    </div>
  );
}
