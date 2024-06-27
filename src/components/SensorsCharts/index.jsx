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
}) {
  const [showPointsGraph, setShowPointsGraph] = useState(true);
  const [sensor, setSensor] = useState({});
  const [colors, setColors] = useState({});
  const [time, setTime] = useState("day");
  const [selected, setSelected] = useState("temperature");
  const [colorsensor, setcolorsensor] = useState({});
  const { data, loading, error } = useApi(
    `/generator/6678464e815884d6e23a4542/data?time=${time}&sensor_type=${selected}`
  );
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  console.log(colorsensor);

  useEffect(() => {
    if (data?.length) {
      setcolorsensor((data || []).reduce(
        (acc, curr) => ({ ...acc, [curr.name]: getRandomColor() }),
        {}
      ))
    }
  }, [data?.length, loading])

  useEffect(() => {
    if (!loading) {
      setSensor(
        data.reduce((acc, curr) => ({ ...acc, [curr.name]: true }), {})
      );
      setColors(
        data.reduce(
          (acc, curr) => ({ ...acc, [curr.name]: colorsensor[curr.name] }),
          {}
        )
      );
    }
  }, [loading]);
  console.log("sensor", sensor);
  function timeform(isoString) {
    const date = new Date(isoString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return ` ${hour}:${minutes}:${seconds}`;
  }

  function dateform(isoString) {
    const date = new Date(isoString);
    return `${date.getDate()}/${date.getMonth() + 1
      } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  function handleChangeGraph() {
    setShowPointsGraph((prev) => !prev);
  }
  const formattedData = data
    ? data.map((dat) => ({
      ...dat,
      color: colorsensor[dat.name],
      points: dat.points.map((p) => ({
        ...p,
        x: time === "day" ? timeform(p.x) : dateform(p.x),
      })),
    }))
    : [];

  console.log('formattedData[0]', formattedData[0]);

  return (
    <div className={styles.SensorsCharts}>
      <div className={styles.selectors}>
        <div className={styles.sensortype}>
          <BoxSensorType setSelected={setSelected} selected={selected} types={types} />
        </div>
        <SensorCheckbox colorsensor={colorsensor} sensor={sensor} setSensor={setSensor} />

        <button className={styles.changegraphbutton} onClick={handleChangeGraph}          >
          חריגות טמפטורה/חיישני טמפרטורה על ציר הזמן 
        </button>
        <SelectRange time={time} setTime={setTime} />
      </div>

      {loading ? (<Loader />) : error ? (<div>Error</div>) : (
        <div className={styles.canvasContainer}>
          <div className={styles.graph1}>
            {showPointsGraph ?
              (<PointsGraph data={formattedData.filter((sens) => sensor[sens.name])} />
              ) : (<LineGraph data={formattedData.filter((sens) => sensor[sens.name])} />
              )}
          </div>
        </div>
      )}
    </div>
  );
}
