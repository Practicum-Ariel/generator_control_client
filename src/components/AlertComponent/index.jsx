import React, { useState } from "react";
import styles from "./style.module.css";
import { MdOutlineArrowLeft } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

export default function index({ status, title, context, handlleClick }) {
  const [isClose, setIsClose] = useState(true);
  return (
    // statuses[status] ?
    <div
      className={`${styles.main} ${styles[status]} `}
      onClick={() => setIsClose(!isClose)}>
      <div className={styles.title}>
        {isClose ? <MdOutlineArrowLeft /> : <TiArrowSortedDown />}
        {title} 
        <div className={styles.context}>{isClose ? (': ' + context) : ':'}</div>
      </div>

      {!isClose && (
        <>
          <div className="">{context}</div>
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
