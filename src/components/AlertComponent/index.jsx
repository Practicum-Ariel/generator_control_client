import React, { useState } from "react";
import styles from "./style.module.css";
import { MdOutlineArrowLeft } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import TechVisitForm from "../TechVisitForm";
import { useNavigate } from "react-router-dom";

export default function index({ id, status, title, description, context, treatments, reasons }) {
  const [isClose, setIsClose] = useState(true);
  let nav = useNavigate()
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
            <h5>סיבות אפשריות לתקלה:</h5>
            {/* {reasons.map(t => <li>{t}</li>)} */}
          </div>
          <button onClick={() => nav('/tech-check/form', { state: { treatments: treatments, insightId : id } })} className={styles.but}>
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
