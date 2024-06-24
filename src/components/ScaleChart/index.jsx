import styles from './style.module.css';
import React from 'react';

export default function ScaleChart({ size = 10, unit = "temp", rangeObject = {} }) {

  // const rangeObjectTemp = 
  // {
  //   normalMin:70,
  //   normlMax:90,
  //   mildMin:90,
  //   mildMax:100,
  //   moderateMin:100,
  //   moderateMax:110,
  //   severe:110
  // }

  const findDeg = (temp) => {
    const onGraph = (temp / (rangeObject.severe + 10)) * 100
    return (onGraph / 100) * 180 - 90
  }

  const cssGradient = (range) => {
    //make an arr of the ranges
    let arrRange = [range.normalMin || 0, range.mildMin, range.moderateMin, range.severe + 10]
    arrRange.forEach((r, i) => r || arrRange[i - 1])
    //make the percent for the cssGradient
    const max = arrRange[arrRange.length - 1]
    const cssGradient = arrRange.map(num => (num / max) * 100);
    console.log({ cssGradient })
    return cssGradient
  }

  const rangeForCSS = cssGradient(rangeObject);
  console.log(findDeg(size));
  return (
    <div className={styles.scaleChart}>
      <div className={styles.circle}>
        <div className={styles.semiCircleFrame}></div>
        <div className={styles.semiCircle} style={{
          background: `linear-gradient(90deg,
            rgba(241, 0, 0, 1) 0%, 
            rgba(241, 0, 0, 1) ${rangeForCSS[0] - 10}%, 
            rgba(23, 167, 9, 1) ${rangeForCSS[0]}%, /*normal range*/
            rgba(187, 232, 57, 1) ${rangeForCSS[1]}%, /*mild anomaly*/
            rgba(240, 167, 8, 1) ${rangeForCSS[2]}%, /*moderat anomaly*/
            rgba(191, 68, 3, 1) ${rangeForCSS[3]}%, /*severe anomaly*/
            rgba(240, 8, 8, 1) 100%) `}}
        >
        </div>
        <div className={styles.line} style={{ rotate: findDeg(size) + "deg" }}>
          <div className={styles.point}></div>
        </div>
      </div>
      <span>{size + " " + unit}</span>
    </div>

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