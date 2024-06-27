import React, { useState } from "react";
import styles from "./style.module.css";
import data from "../SensorCheckbox";
// import data from './client\src\components\SensorCheckbox\index.jsx'

export default function SensorCheckbox({colorsensor, setSensor, sensor }) {
 
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
            <div className={styles.cheakboxsquare}>
            <input
             className={styles.customCheckbox}
              style={{ color: colorsensor[item] }}
              type="checkbox"
              checked={sensor[item]}
              onChange={() => handleCheckboxChange(item)}
            />
            <span style={{ color: colorsensor[item] }}>
              {item}
            </span>
            </div>
          </label>
        );
      })}
    </div>
  );
}
