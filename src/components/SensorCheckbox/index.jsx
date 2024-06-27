import React, { useState } from "react";
import styles from "./style.module.css";
import data from "../SensorCheckbox";
// import data from './client\src\components\SensorCheckbox\index.jsx'

export default function SensorCheckbox({colorType, setSensor, sensor }) {
  // const colorType = {t1:"red",t2:"purple",t3:"black",t4:"yellow"}
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
              style={{ color: colorType[item] }}
              type="checkbox"
              checked={sensor[item]}
              onChange={() => handleCheckboxChange(item)}
            />
            <span style={{ color: colorType[item] }}>
              {item}
            </span>
            
          </label>
        );
      })}
    </div>
  );
}
