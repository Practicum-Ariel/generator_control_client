import React from 'react'
import styles from './style.module.css'

export default function SensorCheckbox({setSensor}) {
    const arr = [
        { name: 'ממוצע', color: 'purple' },
        { name: "חיישן 1", color: 'blue' },
        { name: "חיישן 2", color: 'red' },
        { name: 'חיישן 3', color: 'green' },
      ];
    const handleCheckboxChange = (sensorName) => {
        setSensor(prevState => ({
          ...prevState,
          [sensorName]: !prevState[sensorName]
        }));
      };
  return (
    <div className={styles.checkBox}>
     {arr.map((item,index) => {
       return(
      <label  key={index}>
        <input style={{color:item.color}} type="checkbox" onChange={() => handleCheckboxChange(item.name)}/>
        {item.name}
      </label>)})}
    </div>
  )
}