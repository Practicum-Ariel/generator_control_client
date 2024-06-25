import React from "react";
import styles from "./style.module.css";
import data from "../SensorCheckbox";
// import data from './client\src\components\SensorCheckbox\index.jsx'

export default function SensorCheckbox({ setSensor, sensor }) {
  const handleCheckboxChange = (sensorName) => {
    setSensor((prevState) => ({
      ...prevState,
      [sensorName]: !prevState[sensorName],
    }));
  };
  return (
    <div className={styles.checkBox}>
      {Object.keys(sensor).map((item, index) => {
        return (
          <label key={index}>
            <input
              style={{ color: item.color }}
              type="checkbox"
              checked={sensor[item]}
              onChange={() => handleCheckboxChange(item)}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
}
