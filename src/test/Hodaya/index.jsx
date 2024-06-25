import ScaleChart from '../../components/ScaleChart';
import styles from './style.module.css';
import React from 'react';

export default function Hodaya() {

  const rangeObjectVib = 
  {
    normalMin:0,
    normlMax:10,
    mildMin:10,
    mildMax:15,
    moderateMin:15,
    moderateMax:20,
    severe:20
  }

  
  const rangeObjectTemp = 
  {
    normalMin:70,
    normlMax:90,
    mildMin:90,
    mildMax:100,
    moderateMin:100,
    moderateMax:110,
    severe:110
  }

return(
  <ScaleChart rangeObject={rangeObjectTemp }/>
  );
}




// background: linear-gradient(90deg,
//   rgba(241, 0, 0, 1) 0%,
//   rgba(233, 82, 17, 1) 20%,
//   rgba(23, 167, 9, 1) 58%, /*normal range*/
//   rgba(187, 232, 57, 1) 75%, /*mild anomaly*/
//   rgba(240, 167, 8, 1) 83%, /*moderat anomaly*/
//   rgba(191, 68, 3, 1) 91%, /*severe anomaly*/
//   rgba(240, 8, 8, 1) 100%); 