import React, { useState } from "react";
import styles from "./style.module.css";
import { MdOutlineArrowLeft } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

export default function index({ status, title, description, context, treatments, handlleClick }) {
  const [isClose, setIsClose] = useState(true);
  return (
    // statuses[status] ?
    <div
      className={`${styles.main} ${styles[status]} `}
      onClick={() => setIsClose(!isClose)}>
      <div className={styles.title}>
        {isClose ? <MdOutlineArrowLeft /> : <TiArrowSortedDown />}
        {title} 
        <div className={styles.context}>: {description}</div>
      </div>

      {!isClose && (
        <>
          <div className="">{context}</div>
          <div className={styles.treatments}>
            <h5>דרכי טיפול:</h5>
            {treatments.map(t => <li>{t}</li>)}
          </div>
          <button onClick={() => handleClick} className={styles.but}>
            לפתיחת טיפול
          </button>
        </>
      )}
    </div>
  );
  // : (
  //   "?"
  // );
}
